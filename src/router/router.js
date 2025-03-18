import { createRouter, createWebHistory } from 'vue-router';
import ChatbotRouter from './chatbot';
// import ChatRouter from './chat';

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/MainView.vue')
  },
  ...ChatbotRouter,
  // ...LoginRouter,
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/login/LoginView.vue')
  // },
  {
    path: '/',
    redirect: '/main'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 네비게이션 가드 설정
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    // 로그인이 필요한 페이지인데 로그인 안 되어 있으면 로그인 페이지로 이동
    next('/users/login');
  } else {
    next(); // 그 외에는 해당 페이지로 이동 허용
  }
});


export default router;
