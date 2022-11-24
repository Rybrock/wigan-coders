import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import privacyPolicy from '@/views/services/privacyPolicy.vue'
import termsConditions from '../views/services/termsConditions.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Wigan Coders - Welcome',
      metaTags: [
        {
          name: 'description',
          content: 'Wigan Coders - Welcome'
        },
        {
          property: 'og:description',
          content: 'Wigan Coders - Welcome'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/privacy-policy',
    name: 'privacyPolicy',
    component: privacyPolicy
  },
  {
    path: '/terms',
    name: 'termsConditions',
    component: termsConditions
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
}
})


export default router
