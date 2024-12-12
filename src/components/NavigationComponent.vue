<template>
  <div id="nav">
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/api">API</router-link></li>
        <li><router-link to="/bonus">Bonus</router-link></li>
      </ul>
    </nav>
    <!-- Contenu des routes -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
};
</script>

<style>
nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 1rem;
  margin: 0;
  background-color: #f8f9fa;
}
nav ul li {
  margin-right: 5%;
}
nav ul li a {
  text-decoration: none;
  color: black;
}

nav ul li a:hover {
  color: gray;
}
</style>