<template>



    <div id="navBarBady">
        <transition v-on:leave="leave" v-bind:css="false" v-on:enter="enter">
        
            <ul id='navBar' v-if='navbarShow'>
                <li v-for='(item,index) in myData' @click='select(index)'> {{item.title}}</li>
            </ul>
        </transition>
<!-- 
        <transition v-on:leave="rightLeave" v-bind:css="false" v-on:enter="rightEnter">
            <div id='navBarRighr'  v-if='navbarShow'></div>
        </transition> -->
    </div>



</template>

<script>
import dh from './res/dh.js';


export default {
    data(){
        return{
            myData:[
                {'title':'首页','name':'home',path:'/home'},
                {'title':'影片','name':'film',path:'/film'},
                {'title':'影院','name':'cinema',path:'/cinema'},
                {'title':'商城','name':'shop',path:'/shop'},
                {'title':'我的','name':'my',path:'/my'},
                {'title':'卖座卡','name':'car',path:'/car'}
            ]
        }
    },
    created(){
    },
    computed:{

        navbarShow(){
            return this.$store.state.navbarShow
        }
    },
    methods:{
        //元素离开时候的动画一个Velocity表示一个动画
        leave: function (el, done) {
            // duration: 600 600毫秒内完成该动画
            Velocity(el, { left: '-130%'}, { duration: 1000})
            // complete: done表示离开动画,里必须至少有一个动作,指上面动画做完了在执行
            Velocity(el, {
                opacity: 0,
                display:'none'
            },{ duration: 0} ,{ complete: done })
        },
        //元素进入时候的动画
        enter: function (el, done) {
            Velocity(el, {  left: '0'}, { duration: 600 })
            // Velocity(el, { fontSize: '1em' }, { complete: done })
        },



        // //元素进入时候的动画
        // rightEnter: function (el, done) {
        //     Velocity(el, {opacity: .6}, { duration: 600})
        //     // Velocity(el, { fontSize: '1em' }, { complete: done })
        // },
        // rightLeave: function (el, done) {
        //     // duration: 600 600毫秒内完成该动画
        //     Velocity(el, {opacity:0,display:'none'}, { duration: 1000})
        //     // complete: done表示离开动画,里必须至少有一个动作,指上面动画做完了在执行
        //     Velocity(el, {
        //         opacity: 0,
        //         display:'none'
        //     },{ duration: 0} ,{ complete: done })
        // },


        select(index){
           this.chenge();
            // console.log(index);
            //  this.$router.push({name:this.myData[index].name,params:{index:index}})
             this.$router.push({name:this.myData[index].name})
        },
        chenge(){
            var navbarShow = !this.$store.state.navbarShow
            this.$store.commit('storeSetData',{'key':'navbarShow','data': navbarShow});//给redux设置值
        }
       
    },
    watch:{
    },
    components:{
     
    }
  
}
</script>


<style lang='scss' scoped>
    #navBarBady{
        // width: 100%;
        // height:570px;
        // position: fixed;
        // top: 0px;
        // top:0px;
        // margin-top: 50px;
        //  z-index: 5;
    #navBar{
        width: 60%;
        height:16.25rem;
        position: fixed;
        top: 0px;
        left: -4.0625rem;
        z-index: 5;
        background: rgb(40,40,40);
        margin-top: 51px;
        margin-left: -1.25rem;
        li{
            color:#aaa;
            width: 100%;
            height: 1.5625rem;
            line-height: 1.5625rem;
            list-style: none;
            border-bottom: 1px dashed #333;
            font-size: 0.4688rem;
            text-indent: 0.625rem;
        }
        // border-top: 1px solid #ccc;
    }
    #navBarRighr{
        position:fixed;
        z-index:5;
        width: 100%;
        height:520px;
        margin-top: 1.1875rem;
        top: 0px;
        left: 0;
        display: block;
        background:rgb(0,0,0);
        opacity: 0;
    
    }
    }


</style>


