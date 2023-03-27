<template>
  <div id="app">
    <!--
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><button @click="showLoginPage">Login</button></li>
      </ul>
    </nav>
    -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    showLoginPage() {
      this.$router.push("/login");
    },
  },
};
</script>
