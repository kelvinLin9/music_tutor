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
          component: () => import('../views/CreateCourses.vue')
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
          path: 'UserLogin',
          name: 'UserLogin',
          component: () => import('../views/UserLogin.vue')
        },
      ],
    },
  ]
})

export default router
