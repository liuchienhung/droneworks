import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
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
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
