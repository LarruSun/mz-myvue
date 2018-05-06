<template>
  <div id='Top' @click='chenge()'>
      卖座电影

  </div>
</template>

<script>
export default {
    data(){
        return{
            navbarShow:false
        }
    },
    methods:{
        chenge(){
            var navbarShow = !this.$store.state.navbarShow
            this.$store.commit('storeSetData',{'key':'navbarShow','data': navbarShow});//给redux设置值
        }
    }
  
}
</script>


<style lang='scss' scoped>
    #Top{
        width: 100%;
        height: 1.5625rem;
        background: rgb(40,40,40);
        position: fixed;
        top:0px;
        left: 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        border-bottom: 1px dashed  #333;
        z-index: 5;
    }
</style>