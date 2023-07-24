import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomePage.vue')
        },
        {
          path: 'CreateCourses',
          name: 'CreateCourses',
          component: () => import('../views/CreateCourses.vue'),
          children: [
            {
              path: 'BeATeacherStep1',
              name: 'BeATeacherStep1',
              component: () => import('../views/BeATeacherStep1.vue')
            },
            {
              path: 'BeATeacherStep2',
              name: 'BeATeacherStep2',
              component: () => import('../views/BeATeacherStep2.vue')
            },
            {
              path: 'BeATeacherStep3',
              name: 'BeATeacherStep3',
              component: () => import('../views/BeATeacherStep3.vue')
            },
            {
              path: 'BeATeacherStep4',
              name: 'BeATeacherStep4',
              component: () => import('../views/BeATeacherStep4.vue')
            },
          ]
        },
        {
          path: 'AllCourses',
          name: 'AllCourses',
          component: () => import('../views/AllCourses.vue')
        },
        {
          path: 'coursePage/:coursePageId',
          name: 'coursePage',
          component: () => import('../views/coursePage.vue')
        },
        {
          path: 'MyCourses',
          name: 'MyCourses',
          component: () => import('../views/MyCourses.vue')
        },
        {
          path: 'MemberPage',
          name: 'MemberPage',
          component: () => import('../views/MemberPage.vue')
        },
        {
          path: 'CoursesCart',
          name: 'CoursesCart',
          component: () => import('../views/CoursesCart.vue')
        },
        {
          path: 'CoursesTime',
          name: 'CoursesTime',
          component: () => import('../views/CoursesTime.vue')
        },
        {
          path: 'AccountSetting',
          name: 'AccountSetting',
          component: () => import('../views/AccountSetting.vue')
        },
        {
          path: 'UserLogin',
          name: 'UserLogin',
          component: () => import('../views/UserLogin.vue')
        },
      ],
    },
  ]
})

export default router
