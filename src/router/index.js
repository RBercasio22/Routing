
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import HelloWorld from '@/components/HelloWorld.vue'
import Post from '@/components/Post.vue'
import Card from '@/components/Card.vue'
import Dashboard from '@/components/Dashboard.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    { path: '/Hello', component: HelloWorld },
    { path: '/Post', component: Post },
    { path: '/Card', component: Card },
    { path: '/Dashboard', component: Dashboard },

   
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
