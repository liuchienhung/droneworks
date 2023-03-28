import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import DashBoard from './components/DashBoard.vue'
import FieldMgnt from './components/FieldMgnt.vue'
import BusinessMmatching from './components/BusinessMatching.vue'
import ServiceApplication from './components/ServiceApplication.vue'
import AdminPage from './components/AdminPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/home',
      component: HomePage
    },
    {
      path: '/dashboard',
      component: DashBoard
    },
    {
      path: '/field-management',
      component: FieldMgnt
    },
    {
      path: '/business-matching',
      component: BusinessMmatching
    },
    {
      path: '/service-application',
      component: ServiceApplication
    },
    {
      path: '/admin',
      component: AdminPage
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
