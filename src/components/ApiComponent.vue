<template>
    <div class="all">
        <div class="form">
            <form @submit.prevent="fetchApi">
                <h3>Contacter une API en GET</h3>
                <ul>
                    <li>
                        <label for="url">URL :</label>
                        <input type="text" id="url" v-model="apiUrl" />
                    </li>
                    <li>
                        <label for="methode">Méthode :</label>
                        <input type="text" id="methode" v-model="apiMethod" />
                    </li>
                    <li>
                        <label for="param">Paramètre :</label>
                        <input type="text" id="param" v-model="apiParam" />
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
        };
    },
    methods: {
        async fetchApi() {
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
  margin: 2rem 21% 0 25%;
  width: 50%;
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
    margin: 0 11.5%;
    padding-bottom: 1rem;
    width: 77%;
    text-align: left;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li{
  margin-top: 1em;
}

label {
  display: inline-block;
  width: 25%;
  text-align: left;
}

input{
  font: 1em sans-serif;
}

input:focus {
  border-color: #000;
}

.button {
    margin-top: 1rem;
}

button {
    padding: 5px;
    width: 100px;
    margin-right: 12.5%;
}
</style>