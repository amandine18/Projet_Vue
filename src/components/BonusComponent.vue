<template>
  <div class="accordion-container">
    <!-- Section 1 -->
    <h2 class="section-header">
      <div class="section-title">Section 1</div>
      <div class="section-toggle" @click="toggleSection('section1')" aria-controls="panel1" :aria-expanded="isSection1Open.toString()">
        <span v-if="isSection1Open">-</span>
        <span v-else>+</span>
      </div>
    </h2>

    <div v-show="isSection1Open" id="panel1" class="panel">
      <p class="strong">Les utilisateurs : </p>
      <table>
        <thead>
          <td v-for="user in users" :key="user.id">
            <th>User {{ user.id }}</th>
          </td>
        </thead>
        <tbody>
          <!-- Utilisation de v-for pour afficher les données -->
          <td v-for="user in users" :key="user.id">
            <tr>{{ user.name.toUpperCase() }}</tr>
          </td>
        </tbody>
      </table>
    </div> 
    
    <!-- Section 2 -->
    <h2 class="section-header">
      <div class="section-title">Section 2</div>
      <div class="section-toggle" @click="toggleSection('section2')" aria-controls="panel2" :aria-expanded="isSection2Open.toString()">
        <span v-if="isSection2Open">-</span>
        <span v-else>+</span>
      </div>
    </h2>

    <div v-show="isSection2Open" id="panel2" class="panel">
      <p class="strong">Message de Chuck Norris : </p>
      <p class="joke">{{ joke }}</p>
      <button @click="fetchChuckNorrisJoke">Actualiser</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSection1Open: false, // État pour la section 1
      isSection2Open: false, // État pour la section 2
      users: [],     // utilisateurs de l'API
      joke: '',   // Blague obtenue depuis l'API Chuck Norris
    };
  },
  methods: {
    // Méthode pour basculer l'état d'une section spécifique
    toggleSection(section) {
      if (section === 'section1') {
        this.isSection1Open = !this.isSection1Open;
      } else if (section === 'section2') {
        this.isSection2Open = !this.isSection2Open;
        if (this.isSection2Open) {
          this.fetchChuckNorrisJoke(); // Appeler l'API lors de l'ouverture de la section
        }
      }
    },
    // Méthode pour récupérer une blague depuis l'API Chuck Norris
    fetchChuckNorrisJoke() {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
          this.joke = data.value; // Stocke la blague dans la variable `joke`
        })
        .catch(error => {
          console.error("Erreur lors de l'appel à l'API Chuck Norris", error);
        });
    },
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.users = data; 
      })
      .catch(error => {
        console.error("Erreur, impossible de récupérer les utilisateurs", error);
      });
  },
}
</script>


<style scoped>
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  font-family: Arial, sans-serif;
  cursor: pointer;
  margin: 0;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
}

.section-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  background-color: white;
}

.accordion-container {
  display: flex;
  flex-direction: column;
  margin: 2rem 20px;
  font-family: Arial, sans-serif;
}

button {
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
}

.panel {
  border: 1px solid #ccc;
  padding: 1.5rem 2rem;
}

.strong{
  font-weight: bold;
  text-align: left;
}

.joke {
  border: 1px solid black;
  padding: 0.5rem;
  margin: 1rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

table td {
  border: 1px solid black;
  padding: 10px;
  text-align: center;
}

table thead {
  background-color: #f4f4f4;
  text-align: center;
}

/* Styles responsive */
@media screen and (max-width: 768px) {
  table {
    display: flex;
    border: none;
    text-align: center;
    margin: 2rem 15%;
    width: 70%;
  }
  table td {
    display: flex;
    justify-content: center; /* Centre le contenu dans chaque cellule */
    text-align: center;
    border: 1px solid black;
  }
  tbody {
    width: 80%;
  }
  table td::before {
    content: attr(data-label);
    font-weight: bold;
    margin-right: 10px;
  }
  table thead {
    width: 20%;
  };
}
</style>