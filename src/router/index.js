import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { getToken } from '@/utils/cookies'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // guardian de ruta
    beforeEnter (to, from, next) {
      // validar entes entrar ruta
      console.log(from)
      console.log(to)

      const token = getToken('Access-Token')
      console.log(token)

      // validar el token
      // expiración

      if (token) {
        // da acceso a la ruta
        next()
      }
    }
  },
  {
    path: '/track/:id', // parametros en la ruta
    name: 'TrackDetail',
    component: () => import('@/views/Track')
  },
  {
    path: '/login', // parametros en la ruta
    name: 'Login',
    meta: {
      public: true
    },
    component: () => import('@/views/Login')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// guardian para todas las rutas
router.beforeEach((to, from, next) => {
  // validar en todas las rutas
  next()
})

export default router
