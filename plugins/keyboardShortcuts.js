export default ({ app }, inject) => {
  if (process.client) {
    // Wait for Nuxt to be ready
    window.onNuxtReady(() => {
      // Add keyboard event listener
      document.addEventListener('keydown', (e) => {
        // Only handle if no input elements are focused
        if (document.activeElement.tagName !== 'INPUT' && 
            document.activeElement.tagName !== 'TEXTAREA') {
          
          // Keyboard shortcuts
          switch (e.key) {
            case 'n': // New todo - focus the input
              const todoInput = document.querySelector('input[placeholder*="新しいタスク"]')
              if (todoInput) {
                todoInput.focus()
                e.preventDefault()
              }
              break
            case 'a': // Show all todos
              app.store.dispatch('setFilter', 'all')
              break
            case 'c': // Show completed todos
              app.store.dispatch('setFilter', 'completed')
              break
            case 'i': // Show incomplete todos
              app.store.dispatch('setFilter', 'active')
              break
          }
        }
      })
    })
  }
}
