export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as Joke } from '../../components/Joke.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as SearchJokes } from '../../components/SearchJokes.vue'

export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => c.default || c)
export const LazyJoke = import('../../components/Joke.vue' /* webpackChunkName: "components/joke" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazySearchJokes = import('../../components/SearchJokes.vue' /* webpackChunkName: "components/search-jokes" */).then(c => c.default || c)
