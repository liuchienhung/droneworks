<template>
    <div class="sidebarpage">
      <div class="sidebar-header">
        <img src="./assets/logo.png" alt="Logo" class="logo">
        <h1 class="title">DroneWorks</h1>
      </div>
      <ul class="menu">
        <li v-for="(item, index) in menuItems" :key="index" @click="selectMenuItem(index)" :class="{ active: activeMenuItemIndex === index }">{{ item.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "SidebarPage",
    data() {
      return {
        menuItems: [
          { title: "個人資料", routeName: "Profile" },
          { title: "無人機服務申請", routeName: "DroneServiceApplication" },
          { title: "後臺管理作業", routeName: "Admin" },
        ],
        activeMenuItemIndex: 0,
      };
    },
    methods: {
      selectMenuItem(index) {
        this.activeMenuItemIndex = index;
        this.$router.push({ name: this.menuItems[index].routeName });
      },
    },
  };
  </script>
  
  <style>
.sidebar-header {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 16px;
}

.title {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

/* the rest of the CSS styles */
.sidebarpage {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: #f5f5f5;
  border-right: 1px solid #e0e0e0;
}

@media screen and (max-width: 768px) {
  .sidebarpage {
    position: relative;
    width: 100%;
    border-right: none;
  }
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 12px 16px;
  cursor: pointer;
}

.menu li.active {
  background-color: #e0e0e0;
}
</style>
  