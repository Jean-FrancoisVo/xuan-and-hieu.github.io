import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: () => import('../views/RsvpView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqView.vue'),
    },
    {
      path: '/trip-accommodation',
      name: 'trip-accommodation',
      component: () => import('../views/TripAccommodationView.vue'),
    },
  ],
})

export default router
