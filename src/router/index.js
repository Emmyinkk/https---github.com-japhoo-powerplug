import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/buyElectricity',
    name: 'BuyElectricity',
   
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
   
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/merchant',
    name: 'Merchant',
    
    component: () => import( '../views/Merchant.vue')
  },
  {
    path: '/merchantTwo',
    name: 'MerchantTwo',
   
    component: () => import( '../views/MerchantTwo.vue')
  },
  {
    path: '/findMyToken',
    name: 'findMyToken',
   
    component: () => import( '../views/FMT.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
   
    component: () => import( '../views/FAQ2.vue')
  },
  {
    path: '/orderReview',
    name: 'Electricity',
   
    component: () => import( '../views/OrderReview.vue')
  },
  {
    path: '/completeOrder',
    name: 'Complete',
   
    component: () => import( '../views/CompleteOrder.vue')
  },
  {
    path: '/bankTransfer',
    name: 'BankTransfer',
   
    component: () => import( '../views/bankTransfer.vue')
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
   
    component: () => import( '../views/forgotPassword.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
   
    component: () => import( '../views/pageNotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top: 0 }
    
  },
  linkActiveClass: 'active-link picked'
});

export default router
