var mixin={
    filters: {
        // 时间转换
        changeDate(value){
            var date = new Date(value);
            var month = date.getMonth()+1;//月
            var day=date.getDay();//日
            var arr=['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
            var week=arr[day];//星期
            return `${month}月${day}`;
            
        },
        //字符串截取
        spliceStr(value){
            if(value.length>=30){
                return value.slice(0,30)+"...";
            }else{
                return value;
            }
        }
    }
}


export default mixin;