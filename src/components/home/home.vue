<template>
    <div id='Home'>
        <ScrollAd :scrollAdData='scrollAdData'></ScrollAd>
        <div id='homeIsPlaying'>
            <FilmList :listData='nowPlaying' :state='true'></FilmList>
        </div>
          <div id='commingPlaying'>
            <FilmList :listData='commingPlaying' :state='false'></FilmList>
        </div>

    </div>
</template>


<script>
import ScrollAd from '@/components/public/scrollAd/scrollAd';
import FilmList from '@/components/home/filmList';
import { setTimeout } from 'timers';
export default {

    data(){
        return{
            scrollAdData:[],
            nowPlaying:[],
            commingPlaying:[]
        }
    },
    created(){
        // console.log(this.$store.state.scrollAdData);//获取redux里面的数据        
        
        //获取轮播图数据
        var callback=(state,res)=>{
            if(!state) return;
            this.scrollAdData=res.data.data.billboards;
            this.$store.commit('storeSetData',{'key':'scrollAdData','data':this.scrollAdData});//给redux设置值
        }
        this.$store.commit('axiosGetData',{'type':'scrollAD','callback':callback,'Obj':this});//数据请求
        
        //获取正在上映数据
        var callback=(state,res)=>{
            if(!state) return;
            this.nowPlaying=res.data.data.films;
            this.$store.commit('storeSetData',{'key':'nowPlaying','data':this.nowPlaying});//给redux设置值
            // console.log(this.$store.state.nowPlaying);//获取redux里面的数据 
        }
        this.$store.commit('axiosGetData',{'type':'nowPlaying','callback':callback,'Obj':this});//数据请求
        
        //获取即将上映数据
        var callback=(state,res)=>{
            if(!state) return;
            this.commingPlaying=res.data.data.films;
            this.$store.commit('storeSetData',{'key':'commingPlaying','data':this.commingPlaying});//给redux设置值
            // console.log(this.$store.state.commingPlaying);//获取redux里面的数据 
        }
        this.$store.commit('axiosGetData',{'type':'commingPlaying','callback':callback,'Obj':this});//数据请求


    },
    methods:{

    },
    components:{
        ScrollAd,
        FilmList
    }
}
</script>


<style scoped lang="scss">
    #Home{
        width:100%;
        background: #ddd;
        height: 16.25rem;
        margin-top:1.5625rem;
        overflow: scroll;
        #homeIsPlaying{
            // width: 100%;
        }
        #commingPlaying{
            // width: 100%;
        }


    }
</style>


