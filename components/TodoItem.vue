<template>
  <li class="p-4 flex items-center hover:bg-gray-50 transition-colors duration-150" :class="{ 'bg-gray-50': todo.completed }">
    <input 
      type="checkbox" 
      :checked="todo.completed"
      @change="$emit('toggle')" 
      class="mr-3 h-5 w-5 text-blue-500 cursor-pointer"
    />
    <div class="flex-grow">
      <div 
        class="text-gray-800"
        :class="{ 'line-through text-gray-400': todo.completed }"
      >
        {{ todo.text }}
      </div>
      <TodoTimestamp 
        v-if="todo.createdAt" 
        :date="todo.createdAt" 
        class="mt-1"
      />
    </div>
    <button 
      @click="$emit('remove')" 
      class="text-red-500 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50"
    >
      削除
    </button>
  </li>
</template>

<script>
import TodoTimestamp from './TodoTimestamp.vue'

export default {
  components: {
    TodoTimestamp
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>