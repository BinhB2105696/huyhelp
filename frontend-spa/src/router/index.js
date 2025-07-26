// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Home from '../pages/Home.vue'

import Schedule from '../pages/Schedule.vue'
import History from '../pages/History.vue'
import AdminBooking from '../pages/AdminBooking.vue'
import AdminRoute from '../pages/AdminRoute.vue'
import ContactUs from '../pages/ContactUs.vue'
import AboutUs from '../pages/AboutUs.vue'
import { getToken } from '../utils/auth'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },

  { path: '/home', component: Home },
  { path: '/', component: Home }, // Trang chủ
  { path: '/schedule', component: Schedule },
  { path: '/history', component: History },

  { path: '/contact', component: ContactUs },
  { path: '/about', component: AboutUs },

  { path: '/admin/routes', component: AdminRoute },
  { path: '/admin/bookings', component: AdminBooking },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ✅ Navigation Guard: kiểm tra token cho các trang bảo vệ
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const token = getToken();
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !token) {
    return next('/login');
  }

  if ((to.path === '/login' || to.path === '/register') && token) {
    return next('/home');
  }

  next()
})

export default router;
