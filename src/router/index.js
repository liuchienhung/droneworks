import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import HomePage from '@/components/HomePage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import AdminPage from '@/components/AdminPage.vue'
import ServiceApplication from '@/components/ServiceApplication.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: 'profile',
          name: 'ProfilePage',
          component: ProfilePage
        },
        {
          path: 'admin',
          name: 'AdminPage',
          component: AdminPage
        },
        {
          path: 'service',
          name: 'ServiceApplication',
          component: ServiceApplication
        }
      ]
    }
  ]
})

export default router
