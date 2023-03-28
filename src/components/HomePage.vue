<template>
  <div class="home-container">
    <div class="home-left">
      <div class="home-header">
        <img class="home-logo" src="./assets/logo.png" alt="Logo">
        <h2 class="home-title">DroneWorks</h2>
      </div>
      <div class="home-menu">
        <router-link to="/profile">個人資料</router-link>
        <router-link to="/dashboard">儀表板</router-link>
        <router-link to="/field-management">田間管理</router-link>
        <router-link to="/business-matching">業務媒合與管理服務</router-link>
        <router-link to="/service-application">無人機服務申請</router-link>
        <router-link to="/admin">後臺管理作業</router-link>
      </div>
    </div>
    <div class="home-right">
      <h2 class="home-title">歡迎來到 DroneWorks 管理頁面</h2>
      <p>這是一個基於Vue.js和Bootstrap的簡單的HomePage範例。</p>
    </div>
    <div class="home-divider"></div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem;
}

.home-left {
  flex-basis: 25%;
  margin-right: 2rem;
  background-color: #F0F0F0;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.home-right {
  flex-basis: 75%;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.home-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}

.home-logo {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.home-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.home-menu {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.home-menu a {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
  text-decoration: none;
}

.home-menu a:hover {
  color: #4caf50;
}

.home-divider {
  flex-basis: 0;
  height: 100%;
  width: 1px;
  background-color: #ccc;
  margin: 0 2rem;
}
</style>
