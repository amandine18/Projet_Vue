<template>
    <div class="contact">
        <form @submit.prevent="submitForm" class="formcontact">
            <h3>Nous contacter</h3>
            <ul>
                <li>
                    <div class="field">
                        <label for="nom">Nom :</label>
                        <input type="text" id="nom" v-model="form.nom" @input="clearError('nom')" />
                    </div>
                    <div class="erreur">
                        <span class="error" v-if="errors.nom">{{ errors.nom }}</span>
                    </div>
                </li>
                <li>
                    <div class="field">
                        <label for="email">Email :</label>
                        <input type="text" id="email" v-model="form.email" @input="clearError('email')" />
                    </div>
                    <div class="erreur">
                        <span class="error" v-if="errors.email">{{ errors.email }}</span>
                    </div>
                </li>
                <li>
                    <div class="field">
                        <label for="msg">Message :</label>
                        <textarea id="msg" v-model="form.message" @input="clearError('message')"></textarea>
                    </div>
                    <div class="erreur">
                        <span class="error" v-if="errors.message">{{ errors.message }}</span>
                    </div>
                </li>
            </ul>
            <div class="button">
                <button type="submit">Envoyer</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                nom: "",
                email: "",
                message: ""
            },
            errors: {
                nom: null,
                email: null,
                message: null
            }
        };
    },
    methods: {
        validateForm() {
            let isValid = true;
            this.errors = { nom: null, email: null, message: null };

            if (!this.form.nom){
                this.errors.nom = "Le nom est requis";
                isValid = false;
            }
            if (!this.form.email){
                this.errors.email = "L'email est requis";
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(this.form.email)){
                this.errors.email = "L'email n'est pas valide";
                isValid = false;
            }
            if (!this.form.message){
                this.errors.message = "Le message est requis";
                isValid = false;
            }

            return isValid;
        },
        clearError(field) {
            // Supprime l'erreur du champ correspondant dès qu'un changement est détecté
            if (this.errors[field]) {
                this.errors[field] = null;
            }
        },
        async submitForm() {
            if (!this.validateForm()){
                return;
            }

            const webhookUrl = "https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb";
            const load = {
                content: `**Nouveau message reçu : **\n- **Nom : ** ${this.form.nom}\n- **Email : ** ${this.form.email}\n- **Message : ** ${this.form.message}`
            };

            try {
                const response = await fetch(webhookUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(load)
                });

                if (response.ok) {
                    alert("Message envoyé avec succès !");
                    this.form = { nom: "", email: "", message: "" };
                } else {
                    alert("Erreur lors de l'envoie du message. Veuillez réessayer")
                }
            } catch (error) {
                console.error(error);
                alert("Erreur lors de l'envoi du message. Veuillez vérifier votre connexion.");
            }
        }
    }
}
</script>

<style>
.field{
    display: flex;
    width: 100%;
}
.formcontact{
    width: 50%;
}
li{
    display: flex;
    flex-direction: column;
}
.contact{
    width: 100%;
}
textarea{
  font: 1em sans-serif;
  height: 5rem;
  flex: 0.75;
}
.error {
    color: red;
    font-size: 0.85rem;
}
.erreur{
    text-align: left;
    padding-top: 0.5rem;
}
</style>