import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    // scrollAdData:[]//轮播数据
    // nowPlaying:[]//正在上映数据
    // commingPlaying//即将上映
    // filmNowPlaying//影片正在上映
    navbarShow:false//左侧导航栏的显示状态

}
const mutations = {
    storeSetData(state,playload){
        state[playload.key] = playload.data;
    },
    storeGetData(state,playload){
        console.log(this.state)
        console.log(playload)
        console.log(this.state[playload]);

        // console.log("测试");
       return this.state[playload]
    },
    axiosGetData(state,playload){
        var _this=playload.Obj;
        var api=_this.baseApi+`type=${playload.type}`;
        // console.log(api);
        // api=`http://localhost:3000/api/home/scrollAD`;
        // api=`http://localhost:3000/api/flim/NowPlaying?page=1&count=5`;
        // api=`http://localhost:3000/api/flim/ComPlaying?page=1&count=5`;
        var callback=playload.callback
        _this.$http.get(api)
        .then(function(res){
            callback(true,res);
        })
        .catch(function(error){
            console.log(error);
        })
    }
}
export default new Vuex.Store({
    state,
    mutations
})