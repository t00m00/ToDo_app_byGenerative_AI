<template>
  <div class="fixed bottom-4 right-4">
    <button 
      @click="isOpen = !isOpen" 
      class="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full shadow-md"
      title="キーボードショートカット"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </button>
    
    <div 
      v-if="isOpen" 
      class="absolute bottom-12 right-0 bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-64"
    >
      <h3 class="font-bold text-lg mb-2">キーボードショートカット</h3>
      <ul class="space-y-2">
        <li class="flex justify-between">
          <kbd class="bg-gray-100 px-2 py-1 rounded text-sm">n</kbd>
          <span>新しいタスクを追加</span>
        </li>
        <li class="flex justify-between">
          <kbd class="bg-gray-100 px-2 py-1 rounded text-sm">a</kbd>
          <span>すべてのタスクを表示</span>
        </li>
        <li class="flex justify-between">
          <kbd class="bg-gray-100 px-2 py-1 rounded text-sm">c</kbd>
          <span>完了したタスクを表示</span>
        </li>
        <li class="flex justify-between">
          <kbd class="bg-gray-100 px-2 py-1 rounded text-sm">i</kbd>
          <span>未完了のタスクを表示</span>
        </li>
      </ul>
      <button 
        @click="isOpen = false" 
        class="mt-3 text-sm text-gray-500 hover:text-gray-700"
      >
        閉じる
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
