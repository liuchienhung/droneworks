import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import HomePage from '@/components/HomePage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import AdminPage from '@/components/AdminPage.vue'
import ServiceApplication from '@/components/ServiceApplication.vue'
import ServiceApply from '@/components/ServiceApply.vue'
import MyApplications from '@/components/MyApplications.vue'
import ApplicationReview from '@/components/ApplicationReview.vue'
import BasicInfo from '@/components/BasicInfo.vue'
import ChangePassword from '@/components/ChangePassword.vue'
import AvatarSetting from '@/components/AvatarSetting.vue'
import ReportInfo from '@/components/ReportInfo.vue'

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
          component: ProfilePage,
          children: [
            {
              path: 'basic',
              name: 'BasicInfo',
              component: BasicInfo
            },
            {
              path: 'password',
              name: 'ChangePassword',
              component: ChangePassword
            },
            {
              path: 'avatar',
              name: 'AvatarSetting',
              component: AvatarSetting
            }
          ]
        },
        {
          path: 'service',
          name: 'ServiceApplication',
          component: ServiceApplication,
          children: [
            {
              path: 'apply',
              name: 'ServiceApply',
              component: ServiceApply
            },
            {
              path: 'myapplications',
              name: 'MyApplications',
              component: MyApplications
            },
            {
              path: 'applicationreview',
              name: 'ApplicationReview',
              component: ApplicationReview
            }
          ]
        },
        {
          path: 'admin',
          name: 'AdminPage',
          component: AdminPage,
          children: [
            {
              path: 'report',
              name: 'ReportInfo',
              component: ReportInfo
            }
          ]
        }
      ]
    }
  ]
})

export default router
