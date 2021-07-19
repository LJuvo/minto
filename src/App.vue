<template>
  <div>
    <mt-layout></mt-layout>
    <mt-layout></mt-layout>
  </div>
</template>

<script>
import BaseLayout from "../packages/layout/baseLayout.vue"
export default {
  name: 'app',
  components:{
    "mt-layout": BaseLayout,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
</style>
