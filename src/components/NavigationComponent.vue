<template>
  <div id="nav">
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/api">API</router-link></li>
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
  padding: 0;
  justify-content: space-around;
  padding: 1rem;
  margin: 0;
  background-color: #f8f9fa;
}
nav ul li {
  margin-right: 10px;
}
</style>