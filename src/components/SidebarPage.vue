<template>
  <div class="sidebarpage">
    <div class="sidebar-header">
      <router-link to="/">
        <img src="./assets/logo.png" alt="Logo" class="logo" />
        </router-link>
      <h1 class="title">DroneWorks</h1>
    </div>
    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="index" :class="{ active: activeMenuItemIndex === index }">
        <div class="menu-item" @click="toggleSubmenu(index)">
          {{ item.title }}
          <span class="submenu-icon" v-if="item.children">
            {{ isSubmenuOpen(index) ? '▼' : '▶' }}
          </span>
        </div>
        <ul v-if="item.children && isSubmenuOpen(index)" class="submenu">
          <li v-for="(child, childIndex) in item.children" :key="childIndex">
            <router-link :to="{ name: child.routeName }">{{ child.title }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SidebarPage",
  data() {
    return {
      menuItems: [
        {
          title: "個人資料",
          routeName: "ProfilePage",
          children: [
            { title: "帳號設定", routeName: "BasicInfo" },
            { title: "修改密碼", routeName: "ChangePassword" },
            //{ title: "頭像設置", routeName: "AvatarSetting" },
          ],
        },
        {
          title: "無人機服務申請",
          routeName: "ServiceApplication",
          children: [
            { title: "服務申請", routeName: "ServiceApply" },
            { title: "我的申請", routeName: "MyApplications" },
            { title: "申請審核", routeName: "ApplicationReview" },
          ],
        },
        { title: "後臺管理作業", 
          routeName: "AdminPage",
          children: [
            { title: "報表", routeName: "ReportInfo" },
          ],
        },
      ],
      activeMenuItemIndex: 0,
      openSubmenus: [],
    };
  },
  methods: {
    selectMenuItem(index) {
      this.activeMenuItemIndex = index;
      this.$router.push({ name: this.menuItems[index].routeName });
    },
    toggleSubmenu(index) {
      if (this.isSubmenuOpen(index)) {
        this.closeSubmenu(index);
      } else {
        this.openSubmenu(index);
      }
    },
    isSubmenuOpen(index) {
      return this.openSubmenus.includes(index);
    },
    openSubmenu(index) {
      this.openSubmenus.push(index);
    },
    closeSubmenu(index) {
      this.openSubmenus.splice(this.openSubmenus.indexOf(index), 1);
    },
  },
};
</script>
<style>
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 新增這行程式碼 */
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
  width: 250px; /* 設定寬度 */
  background-color: #f5f5f5; /* 設定背景色 */
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1); /* 加入陰影 */
  position: fixed; /* 固定在畫面上 */
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto; /* 設定垂直滾動條 */
}

.menu {
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #e0e0e0;
}

.submenu {
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #f9f9f9;
}

.submenu li {
  padding: 8px 16px;
}

.submenu li:hover {
  background-color: #e0e0e0;
}
</style>