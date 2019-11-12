var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=master';
var myVue = new Vue({
    el: ".test",
    data: {
        a: "A內容",
        content: "F12檢查 => Console",
    },
    beforeCreate: function () {
        console.log(this.a);
        console.log('屬性未載入前');
       
    },
    created: function () {
        console.log(this.a);
        
        console.log("資料 $data 已可取得，但 $el 屬性還未被建立");
    },
    beforeMount: function () {
        console.log("還沒抓到 el 資料");
    },
    
    mounted: function () {
      
        console.log("已掛上 DOM，並取得 el 資料");
    },
   
    methods: {
        greet: function () {
            console.log("123");
        }
    }
});