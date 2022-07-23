<template>
  <div class="">
    <NavigationBar/>
    <router-view>
    </router-view>
  </div>
  
</template>

<script lang="ts">
  import NavigationBar from './components/NavigationBar.vue'

  export default {
    name: "App",
    components: {
      NavigationBar
    }
  }
</script>

<style scoped>

</style>
