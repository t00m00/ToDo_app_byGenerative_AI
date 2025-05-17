<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-600 text-white shadow">
      <div class="container mx-auto px-4 py-4">
        <h1 class="text-2xl font-bold">Todo アプリ</h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-6">
      <nuxt />
    </main>
    <footer class="bg-white border-t mt-auto py-4">
      <div class="container mx-auto px-4 text-center text-gray-500">
        <p>Vue.js と Nuxt.js で作成した Todo アプリ</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
