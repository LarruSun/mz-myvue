<template>
    <div>
        
        <div id="flimList" v-for="(item,index) in listData" @click="select(item)">
            <img :src='item.cover.origin' alt="网络错误">
            <div class="text">
                <div class='left'>
                    <p class='name'>{{item.name}}</p>
                    <p class='title'>{{item.cinemaCount}}家影院上映  {{item.watchCount}}想看</p>
                </div>
                <div class='right'>
                    <p class="pf" v-if='state'>{{item.grade}}</p>
                    <p class="sydata" v-else>{{item.premiereAt | changeDate}}上映</p>
                </div>
            </div>
        </div>  
    
    </div>


</template>




<script>
import filters from '@/components/public/Filters/Filters';
export default {
    props:['listData','state'],
    mixins:[filters],//引入导入的Filters过滤器filters名字必须为filters才能注册到filters里面(引入既可以使用,直接把文件引入)
    data(){
        return{}
    },
    created(){
        // setTimeout(()=>{
        //     console.log(this.listData)
        //     console.log(this.state)
            
        // },1000)

    },
    methods:{
        select(item){
            this.$store.commit('storeSetData',{'key':'navbarShow','data': false});//给redux设置值
            // console.log(item);
        }
    },
    filters:{
        changePrice(value){
            return value;
        }
    }


}
</script>

<style lang="scss" scoped>
    #flimList{
        width: 95%;
        margin: 0 auto;
        margin-top: 0.625rem;
        img{
            width: 100%;
            height: 4.0625rem;    
        }
        .text{
            margin:0px;
            padding: 0px;
            height: 1.5625rem;
            // padding-top: 0.4688rem;
            background: #fff;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            text-indent: 0.4688rem;
            text-indent: 5%;
        }
        .left{
            margin-right: 2.3438rem;
            width:55%;
            .name{
                font-weight: 700;
                margin: 0px;
            }
            .title{
                width: 110%;
                color: #aaa;
                margin: 0px;
            }

        }
        .right{
            width: 20%;
            // text-indent: 0;
            color: orangered;

            .pf{
                font-size: 0.625rem;
            }
            .sydata{
                text-indent: 0;
                font-size:0.375rem;
            }
        }

    }
</style>


