<template>
  <div id="app">
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
