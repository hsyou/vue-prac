<template>
  <div id="app">
    <div id="left-navigation-bar">
     
    </div>

  <button type="button" class="btn btn-primary">버튼</button>
    
    <router-view/>
  </div>
</template>

<script>
import BoardList from '@/components/board/BoardList'
export default {
  name: 'App',
   components:{
    BoardList
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
