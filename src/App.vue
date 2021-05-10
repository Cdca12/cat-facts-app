<template>
  <div id="app">
    <div class="sticky-top">
      <img class="logo" src="./assets/logo.png" alt="Cat Facts" />
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/randomFact">Random Fact</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #fcbe13;
}

#nav a {
  font-weight: bold;
  font-size: 20px;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
}

.logo {
  width: 250px;
  margin-top: 10px;
}

</style>
