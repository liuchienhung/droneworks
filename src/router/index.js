import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import HomePage from '@/components/HomePage.vue'
//import ProfilePage from '@/components/ProfilePage.vue'
//import AdminPage from '@/components/AdminPage.vue'
//import ServiceApplication from '@/components/ServiceApplication.vue'
import ServiceApply from '@/components/ServiceApply.vue'
import MyApplications from '@/components/MyApplications.vue'
import ApplicationReview from '@/components/ApplicationReview.vue'
import BasicInfo from '@/components/BasicInfo.vue'
import ChangePassword from '@/components/ChangePassword.vue'
import AvatarSetting from '@/components/AvatarSetting.vue'
import ReportInfo from '@/components/ReportInfo.vue'
import TestPage from '@/components/TestPage.vue'
import DashboardPage from '@/components/DashboardPage.vue'

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
      path: '/test',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: DashboardPage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
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
        }, {
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
        },
        {
          path: 'report',
          name: 'ReportInfo',
          component: ReportInfo
        }
      ]
    }
  ]
})

export default router
