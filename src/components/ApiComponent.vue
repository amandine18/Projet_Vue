<template>
    <div class="all">
        <div class="form">
            <form @submit.prevent="fetchApi">
                <h3>Contacter une API en GET</h3>
                <ul>
                    <li>
                        <div class="field">
                            <label for="url">URL :</label>
                            <input type="text" id="url" v-model="apiUrl" @input="handleUrlChange()"/>
                        </div>
                        <div class="erreur">
                            <span class="error" v-if="errorUrl">{{ errorUrl }}</span>
                        </div>
                    </li>
                    <li>
                        <div class="field">
                            <label for="methode">Méthode :</label>
                            <select id="methode" v-model="apiMethod">
                                <option value="GET">GET</option>
                                <option value="POST">POST</option>
                                <option value="PUT">PUT</option>
                                <option value="DELETE">DELETE</option>
                            </select>
                        </div>
                    </li>
                    <li v-if="apiMethod !== 'GET' && apiMethod !== 'DELETE'">
                        <div class="field">
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
// import axios from 'axios';
export default {
    data() {
        return {
            apiUrl: '',
            apiMethod: 'GET', // Par défaut GET
            apiParam: '',
            apiResponse: null, // Stocke la réponse de l'API
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
            // Supprime l'erreur du champ correspondant dès qu'un changement est détecté
            if (field === 'errorUrl') {
                this.errorUrl = null;
            }
            if (field === 'errorParam') {
                this.errorParam = null;
            }
        },
        handleUrlChange() {
            this.apiResponse = null; // Réinitialise la réponse lorsque l'URL est modifiée
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
            // if (!this.validateForm()) {
            //     return; //Arrête la fonction si la validation échoue
            // }
            // let url = this.apiUrl
            // let options = { method: this.apiMethod };
            // if (this.apiMethod !== 'GET') {
            //     options.headers = { 'Content-Type': 'application/json' }, {'accept': 'application/json'}, {'X-API-KEY': this.apiKey} ;
            //     options.body = JSON.stringify(JSON.parse(this.apiParam));
            //     console.log('test3')
            // }

            // const response = await fetch(url, options);
            // console.log('test5')
            // if (!response.ok) {
            //     throw new Error(`Erreur HTTP : ${response.status}`);
            // }

            // const data = await response.json();
            // this.apiResponse = JSON.stringify(response, null, 2); 
            // try {
            
            // } catch (error) {
            //     console.error(error);
            //     // this.apiResponse = "Aucune réponse de l'API, réessayez avec d'autres informations";
            //     this.apiResponse = error;
            // }

            let url = this.apiUrl;
            let option = this.apiMethod;
            let param = this.apiParam;

            let requete = new XMLHttpRequest();
            requete.onreadystatechange = () => {
                console.log(requete.readyState)
                if (requete.readyState === XMLHttpRequest.DONE) {
                    if (requete.status === 200 || requete.status === 201) {
                        try {
                            // Parse and set the API response to the variable
                            this.apiResponse = JSON.parse(requete.responseText);
                        } catch (error) {
                            console.error("JSON Parsing Error:", error.message);
                            this.apiResponse = "Erreur lors de l'analyse de la réponse JSON.";
                        }
                    } else {
                        console.error(`HTTP Error: ${requete.status} - ${requete.statusText}`);
                        //console.log(requete.readyState);
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
                console.log('test')
                requete.send();
                
            }


            // try {
            //     const config = {
            //         method: this.apiMethod,
            //         url: this.apiUrl,
            //         headers: {
            //             'Content-Type': 'application/json',
            //         }
            //     };

            //     if (this.apiMethod !== 'GET' && this.apiMethod !== 'DELETE') {
            //         config.data = JSON.parse(this.apiParam);
            //     }

            //     const response = await axios(config);
            //     this.apiResponse = JSON.stringify(response.data, null, 2);
            // } catch (error) {
            //     this.apiResponse = `Erreur: ${error.response?.data || error.message}`;
            // }
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
</style>