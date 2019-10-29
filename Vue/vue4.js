
let data = {
    obj: {
        num: 0
    },
    objList: [{num:0},{num:0},{num:0}],
    number: 0,
    numberList:[0,0,0]
}



let vm = new Vue({
el:'#app',
data:data,
methods: {
    objListHandler(i){
        this.objList[i].num++
    },
    numberListHandler(i){
        // this.numberList[i]++ 不能直接修改 不合理
        this.$set(this.numberList , i , this.numberList[i] + 1)
    }
},
watch: {
    number(val , oldVal){
        console.log('number:', val , oldVal);
    },
    // ['obj.num'](val , oldVal){
    //     console.log('obj:', val , oldVal);
    // }
    obj:{
        handler(val , oldVal){
                console.log('obj:', val , oldVal);
        },
        deep:true
    },//觀測物件 val跟oldval不會變 沒意義 物件只有一個

},


})
