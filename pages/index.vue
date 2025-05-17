<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Todo アプリ</h1>
    
    <div class="mb-6">
      <div class="flex">
        <input 
          v-model="newTodo" 
          @keyup.enter="addTodo"
          type="text" 
          placeholder="新しいタスクを入力..." 
          class="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          @click="addTodo" 
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
        >
          追加
        </button>
      </div>
    </div>

    <TodoFilter 
      :currentFilter="currentFilter" 
      @filter="setFilter" 
      v-if="todos.length > 0" 
    />

    <div v-if="todos.length === 0" class="text-gray-500 text-center py-4">
      タスクがありません。新しいタスクを追加してください。
    </div>

    <ul v-else class="bg-white rounded-lg shadow divide-y">
      <TodoItem
        v-for="(todo, index) in filteredTodos"
        :key="index"
        :todo="todo"
        @toggle="toggleTodo(getOriginalIndex(todo))"
        @remove="removeTodo(getOriginalIndex(todo))"
      />
    </ul>

    <TodoFooter 
      v-if="todos.length > 0" 
      :itemsLeft="activeCount" 
      :hasCompleted="hasCompleted"
      @clear-completed="clearCompleted"
    />
    
    <KeyboardShortcutsHelp />
  </div>
</template>

<script>
import TodoItem from '~/components/TodoItem.vue'
import TodoFilter from '~/components/TodoFilter.vue'
import TodoFooter from '~/components/TodoFooter.vue'
import KeyboardShortcutsHelp from '~/components/KeyboardShortcutsHelp.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TodoItem,
    TodoFilter,
    TodoFooter,
    KeyboardShortcutsHelp
  },
  data() {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters({
      todos: 'allTodos',
      filteredTodos: 'filteredTodos',
      completedCount: 'completedCount',
      activeCount: 'activeCount',
      hasCompleted: 'hasCompleted',
      currentFilter: 'currentFilter'
    })
  },
  mounted() {
    // Load todos from localStorage when component mounts
    this.$store.dispatch('loadTodos')
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.$store.dispatch('addTodo', this.newTodo)
        this.newTodo = ''
      }
    },
    toggleTodo(index) {
      this.$store.dispatch('toggleTodo', index)
    },
    removeTodo(index) {
      this.$store.dispatch('removeTodo', index)
    },
    clearCompleted() {
      this.$store.dispatch('clearCompleted')
    },
    setFilter(filter) {
      this.$store.dispatch('setFilter', filter)
    },
    getOriginalIndex(todo) {
      return this.todos.findIndex(t => t === todo)
    }
  }
}
</script>