<template>  
  <div class="container-fluid" id="app">
    <top></top>
    <right></right>
    <router-view></router-view>
  </div>    
</template>

<script>
import top from './components/public/top'
import right from './components/public/right'
export default {
  name: 'app',
  components: {
    top,
    right
  }
}
</script>

<style>

</style>