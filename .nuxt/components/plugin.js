import Vue from 'vue'

const components = {
  AppHeader: () => import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => c.default || c),
  Joke: () => import('../../components/Joke.vue' /* webpackChunkName: "components/joke" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  SearchJokes: () => import('../../components/SearchJokes.vue' /* webpackChunkName: "components/search-jokes" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
