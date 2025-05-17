export default ({ store }) => {
  // Only run on client-side and only in production mode
  if (process.client) {
    window.onNuxtReady(() => {
      // When Nuxt is ready, load todos from localStorage
      store.dispatch('loadTodos')
    })
  }
}
