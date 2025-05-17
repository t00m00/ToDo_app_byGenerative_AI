export const state = () => ({
  todos: [],
  filter: 'all' // 'all', 'active', 'completed'
})

export const mutations = {
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  },
  TOGGLE_TODO(state, index) {
    state.todos[index].completed = !state.todos[index].completed
  },
  REMOVE_TODO(state, index) {
    state.todos.splice(index, 1)
  },
  SET_TODOS(state, todos) {
    state.todos = todos
  },
  CLEAR_COMPLETED(state) {
    state.todos = state.todos.filter(todo => !todo.completed)
  },
  SET_FILTER(state, filter) {
    state.filter = filter
  }
}

export const actions = {
  addTodo({ commit }, text) {
    const todo = {
      text,
      completed: false,
      createdAt: new Date()
    }
    commit('ADD_TODO', todo)
    // Save to localStorage
    this.dispatch('saveTodos')
  },
  toggleTodo({ commit, state }, index) {
    commit('TOGGLE_TODO', index)
    // Save to localStorage
    this.dispatch('saveTodos')
  },
  removeTodo({ commit }, index) {
    commit('REMOVE_TODO', index)
    // Save to localStorage
    this.dispatch('saveTodos')
  },
  clearCompleted({ commit }) {
    commit('CLEAR_COMPLETED')
    // Save to localStorage
    this.dispatch('saveTodos')
  },
  setFilter({ commit }, filter) {
    commit('SET_FILTER', filter)
  },
  saveTodos({ state }) {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  loadTodos({ commit }) {
    try {
      const todos = JSON.parse(localStorage.getItem('todos'))
      if (Array.isArray(todos)) {
        commit('SET_TODOS', todos)
      }
    } catch (e) {
      console.error('Failed to load todos from localStorage', e)
    }
  }
}

export const getters = {
  allTodos: state => state.todos,
  completedTodos: state => state.todos.filter(todo => todo.completed),
  activeTodos: state => state.todos.filter(todo => !todo.completed),
  completedCount: state => state.todos.filter(todo => todo.completed).length,
  activeCount: state => state.todos.filter(todo => !todo.completed).length,
  hasCompleted: state => state.todos.some(todo => todo.completed),
  currentFilter: state => state.filter,
  filteredTodos: state => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter(todo => !todo.completed)
      case 'completed':
        return state.todos.filter(todo => todo.completed)
      default:
        return state.todos
    }
  }
}
