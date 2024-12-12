<template>
    <div class="all">
        <div class="form">
            <form @submit.prevent="fetchApi">
                <h3>Contacter une API en GET</h3>
                <ul>
                    <li>
                        <div class="field" id="other">
                            <label for="url">URL :</label>
                            <input type="text" id="url" v-model="apiUrl" @input="handleUrlChange()"/>
                        </div>
                        <div class="erreur">
                            <!-- Utilisation de v-if pour afficher l'erreur -->
                            <span class="error" v-if="errorUrl">{{ errorUrl }}</span>
                        </div>
                    </li>
                    <li>
                        <div class="field" id="other">
                            <label for="methode">Méthode :</label>
                            <select id="methode" v-model="apiMethod">
                                <option value="GET">GET</option>
                                <option value="POST">POST</option>
                                <option value="PUT">PUT</option>
                                <option value="DELETE">DELETE</option>
                            </select>
                        </div>
                    </li>
                    <!-- Utilisation de v-if pour gérer les cas -->
                    <li v-if="apiMethod !== 'GET' && apiMethod !== 'DELETE'">
                        <div class="field" id="param">
                            <label for="param">Paramètre :</label>
                            <textarea id="param" v-model="apiParam" @input="handleMethodChange()" />
                        </div>
                        <div class="erreur">
                            <span class="error" v-if="errorParam">{{ errorParam }}</span>
                        </div>
                    </li>
                </ul>
                <div class="button">
                    <button type="submit">Transmettre</button>
                </div>
            </form>
        </div>
        <div class="res">
            <div class="content" v-if="apiResponse">
                <h3>Résultat</h3>
                <p>{{ apiResponse }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            apiUrl: '',
            apiMethod: 'GET', //Par défaut GET
            apiParam: '',
            apiResponse: null,
            errorUrl: null,
            errorParam: null,
        };
    },
    methods: {
        validateForm() {
            let isValid = true;
            this.errorUrl = null;
            this.errorParam = null;

            if (!this.apiUrl) {
                this.errorUrl = "L'URL est requise";
                isValid = false;
            }

            if (((this.apiMethod !== 'GET') && (this.apiMethod !== 'DELETE')) && (!this.apiParam)) {
                this.errorParam = "Le paramètre est requis et doit être un JSON valide";
                isValid = false;
            }

            return isValid;
        },
        clearError(field) {
            //Supprime l'erreur du champ correspondant dès qu'un changement est détecté
            if (field === 'errorUrl') {
                this.errorUrl = null;
            }
            if (field === 'errorParam') {
                this.errorParam = null;
            }
        },
        handleUrlChange() {
            this.apiResponse = null; //Réinitialise la réponse lorsque l'URL est modifiée
            this.clearError('errorUrl');
        },
        handleMethodChange() {
            this.apiResponse = null;
            this.clearError('errorParam');
        },
        isValidJson(str) {
            try {
                JSON.parse(str);
                return true;
            } catch (e) {
                return false;
            }
        },
        async fetchApi() {
            let url = this.apiUrl;
            let option = this.apiMethod;
            let param = this.apiParam;

            let requete = new XMLHttpRequest();
            requete.onreadystatechange = () => {
                if (requete.readyState === XMLHttpRequest.DONE) {
                    if (requete.status === 200 || requete.status === 201) {
                        try {
                            this.apiResponse = JSON.parse(requete.responseText);
                        } catch (error) {
                            console.error("JSON Parsing Error:", error.message);
                            this.apiResponse = "Erreur lors de l'analyse de la réponse JSON.";
                        }
                    } else {
                        console.error(`HTTP Error: ${requete.status} - ${requete.statusText}`);
                        this.apiResponse = `Erreur HTTP: ${requete.status} - ${requete.statusText}`;
                    }
                }
            };

            requete.open(option, url);
            if (this.apiMethod !== 'GET' && this.apiMethod !== 'DELETE') {
                const payload = typeof param === 'string' ? JSON.parse(param) : param;
                requete.setRequestHeader("Content-Type", "application/json");
                requete.send(JSON.stringify(payload));
            } else {
                requete.send();
                
            }
        },
    },
}
</script>

<style>
form {
  margin: 2rem auto;
  width: 60%;
  padding: 2%;
  border: 1px solid #ccc;
  border-radius: 1em;
}
.all{
    display: flex;
}
.form{
    width: 50%;
}
.res{
    width: 50%;
}
.content h3{
    margin: 0 0 2rem 0;
}
.content{
    margin: 2rem 25% 0 21%;
    width: 50%;
    padding: 2%;
    border: 1px solid #ccc;
    text-align: justify;
    border-radius: 1em;
}
form h3{
    margin: 0 12.5%;
    padding-bottom: 1rem;
    text-align: left;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li{
  margin-top: 1em;
  margin-left: 12.5%;
  display: flex; /* Utiliser Flexbox */
}

label {
  display: inline-block;
  width: 25%;
  text-align: left;
}

input{
  font: 1em sans-serif;
  flex: 0.75;
}

input:focus {
  border-color: #000;
}

.button {
    margin-top: 2rem;
}

button {
    padding: 5px;
    width: 100px;
}

/* Styles responsive */
@media screen and (max-width: 1350px) {
    form {
        width: 90%;
    }
    #param {
        display: block;
    }
    #param label {
        width: 100%;
        text-align: left;
        margin-bottom: 5px;
    }
    #param textarea {
        width: 88%;
    }
}

@media screen and (max-width: 780px) {
    #other {
        display: block;
    }
    #other label {
        width: 100%;
        text-align: left;
        margin-bottom: 5px;
    }
    #other input,  #other input{
        align-items: left;
        width: 88%;
    } 
}
</style>