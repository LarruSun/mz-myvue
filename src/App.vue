<template>
  <div id="app">
    <Top></Top>
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/public/navBar/navBar';
import Top from '@/components/public/Top/top';
export default {
  data(){
    return{}
  },
  components:{
    NavBar,
    Top

  },
  methods:{
  }

}
</script>

<style lang='scss' scoped>
@import'reset-css/reset.css';
  
  
</style>
