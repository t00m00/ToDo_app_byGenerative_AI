<template>
  <div class="flex justify-between items-center text-sm text-gray-600 mt-4 py-2 border-t">
    <div>
      {{ itemsLeft }} 件のタスクが残っています
    </div>
    <button 
      v-if="hasCompleted"
      @click="$emit('clear-completed')" 
      class="text-gray-500 hover:text-gray-700 underline"
    >
      完了したタスクを削除
    </button>
  </div>
</template>

<script>
export default {
  props: {
    itemsLeft: {
      type: Number,
      required: true
    },
    hasCompleted: {
      type: Boolean,
      required: true
    }
  }
}
</script>
