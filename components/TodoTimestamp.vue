<template>
  <span class="text-xs text-gray-400">
    {{ formattedDate }}
  </span>
</template>

<script>
export default {
  props: {
    date: {
      type: [Date, String],
      required: true
    }
  },
  computed: {
    formattedDate() {
      const date = new Date(this.date)
      if (isNaN(date.getTime())) {
        return ''
      }
      
      // Format: YYYY/MM/DD HH:MM
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      
      return `${year}/${month}/${day} ${hours}:${minutes}`
    }
  }
}
</script>
