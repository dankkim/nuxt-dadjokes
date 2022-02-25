import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61ee7223 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6406690d = () => interopDefault(import('../pages/jokes/index.vue' /* webpackChunkName: "pages/jokes/index" */))
const _303a3578 = () => interopDefault(import('../pages/jokes/_id/index.vue' /* webpackChunkName: "pages/jokes/_id/index" */))
const _fcb36630 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _61ee7223,
    name: "about"
  }, {
    path: "/jokes",
    component: _6406690d,
    name: "jokes"
  }, {
    path: "/jokes/:id",
    component: _303a3578,
    name: "jokes-id"
  }, {
    path: "/",
    component: _fcb36630,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
