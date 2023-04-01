<template>
  <div class="app">
    <FooterPage />
    <SidebarPage />
    <div class="main">
      <div class="content" style="margin-left: 200px;">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
import SidebarPage from './SidebarPage.vue'
import FooterPage from './FooterPage.vue'

export default {
  name: 'HomePage',
  components: {
    SidebarPage,
    FooterPage
  }
}
</script>