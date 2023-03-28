<template>
  <div id="app">
    <SidebarPage />
    <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
      <FooterPage />
    </div>
  </div>
</template>

<script>
import SidebarPage from './SidebarPage.vue'
import FooterPage from './FooterPage.vue'

export default {
  name: 'App',
  components: {
    SidebarPage,
    FooterPage
  }
}
</script>
