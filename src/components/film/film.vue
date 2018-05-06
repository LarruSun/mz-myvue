<template>
  <div id='Filme'>
      <FilmLists></FilmLists>
      Filme
  </div>
</template>

<script>
import FilmLists from '@/components/film/filmLists'
export default {
    data(){
        return{filmNowPlaying:[]}
    },
    methods:{

    },
    created(){
        // console.log(this.$route.params);
        //获取影院正在上映数据
        var callback=(state,res)=>{
            if(!state) return;
            this.filmNowPlaying=res.data.data.films;
            this.$store.commit('storeSetData',{'key':'filmNowPlaying','data':this.filmNowPlaying});//给redux设置值
            // console.log(this.$store.state.filmNowPlaying);//获取redux里面的数据 
        }
        this.$store.commit('axiosGetData',{'type':'filmNowPlaying','callback':callback,'Obj':this});//数据请求
    },
    components:{
        FilmLists
    }
}
</script>


<style lang="scss" scoped>

</style>


