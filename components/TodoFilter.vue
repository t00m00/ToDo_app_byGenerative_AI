<template>
  <div class="flex justify-center space-x-2 my-4">
    <button 
      @click="$emit('filter', 'all')" 
      class="px-3 py-1 rounded"
      :class="{ 'bg-blue-500 text-white': currentFilter === 'all', 'bg-gray-200': currentFilter !== 'all' }"
    >
      すべて
    </button>
    <button 
      @click="$emit('filter', 'active')" 
      class="px-3 py-1 rounded"
      :class="{ 'bg-blue-500 text-white': currentFilter === 'active', 'bg-gray-200': currentFilter !== 'active' }"
    >
      未完了
    </button>
    <button 
      @click="$emit('filter', 'completed')" 
      class="px-3 py-1 rounded"
      :class="{ 'bg-blue-500 text-white': currentFilter === 'completed', 'bg-gray-200': currentFilter !== 'completed' }"
    >
      完了済み
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentFilter: {
      type: String,
      required: true,
      default: 'all',
      validator: value => ['all', 'active', 'completed'].includes(value)
    }
  }
}
</script>
