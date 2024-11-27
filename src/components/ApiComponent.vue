<template>
    <div class="all">
        <div class="form">
            <form @submit.prevent="fetchApi">
                <h3>Contacter une API en GET</h3>
                <ul>
                    <li>
                        <div class="field">
                            <label for="url">URL :</label>
                            <input type="text" id="url" v-model="apiUrl" @input="clearError('errorUrl')" />
                        </div>
                        <div class="erreur">
                            <span class="error" v-if="errorUrl">{{ errorUrl }}</span>
                        </div>
                    </li>
                    <li>
                        <div class="field">
                            <label for="methode">Méthode :</label>
                            <input type="text" id="methode" v-model="apiMethod" />
                        </div>
                    </li>
                    <li>
                        <div class="field">
                            <label for="param">Paramètre :</label>
                            <input type="text" id="param" v-model="apiParam" />
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
            apiMethod: 'GET', // Par défaut GET
            apiParam: '',
            apiResponse: null, // Stocke la réponse de l'API
            errorUrl: null,
        };
    },
    methods: {
        validateForm() {
            let isValid = true;
            this.errorUrl = null;

            if (!this.apiUrl){
                this.errorUrl = "L'URL est requise";
                isValid = false;
            }

            return isValid;
        },
        clearError(field) {
            // Supprime l'erreur du champ correspondant dès qu'un changement est détecté
            if (field === 'errorUrl') {
                this.errorUrl = null;
            }
        },
        async fetchApi() {
            if (!this.validateForm()) {
                return; // Arrête la fonction si la validation échoue
            }
            
            try {
                let url = this.apiUrl;
                if (this.apiParam) {
                    url += `?${this.apiParam}`;
                }

                const response = await fetch(url, { method: this.apiMethod });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }

                const data = await response.json(); // Supposons que la réponse soit au format JSON
                this.apiResponse = JSON.stringify(data, null, 2); // Formatage JSON pour l'affichage
            } catch (error) {
                console.error(error);
                this.apiResponse = "Aucune réponse de l'API, réessayez avec d'autres informations";
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
</style>