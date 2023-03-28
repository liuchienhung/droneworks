import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import DroneServiceApplication from './components/DroneServiceApplication.vue'
import ProfilePage from './components/ProfilePage.vue'
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
      path: '/service-application',
      component: DroneServiceApplication
    },    {
      path: '/profile',
      component: ProfilePage
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
