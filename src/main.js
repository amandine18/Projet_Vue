import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Import Vue Router
import ContactPage from './views/ContactPage.vue';
import ApiPage from './views/ApiPage.vue';
import HomePage from './views/HomePage.vue';
import BonusPage from './views/BonusPage.vue';

Vue.config.productionTip = false;

// Enregistrement de Vue Router comme plugin
Vue.use(VueRouter);

// Création de l'instance du routeur
const router = new VueRouter({
  mode: 'history', // Permet d'utiliser des URLs sans hash (#)
  routes: [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactPage },
    { path: '/api', component: ApiPage },
    { path: '/bonus', component: BonusPage }
  ]
});

// Création de l'instance Vue
new Vue({
  render: h => h(App),
  router // Ajout du routeur à l'application
}).$mount('#app');