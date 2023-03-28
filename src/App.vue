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

<style>
#app {
  position: relative;
  min-height: 100vh;
}

.main {
  padding-bottom: 60px; /* 留出Footer高度的空間 */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
}
</style>
