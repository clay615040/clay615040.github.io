let data = {
    input: {
        type: '全部',
        title: ''
    },
    menu: [
        { type: 'Alex教學', title: '表單雙向資料', link: './vue1.html' },
        { type: '六角學院', title: '代辦表單', link: './sixvue1.html' },
        { type: '練習', title: 'API天氣卡片', link: '/js+jq/weather_card.html' },
        { type: '練習', title: 'JQ分頁', link: '/js+jq/ulli+jq.html' },
        { type: 'Alex教學', title: '資料巢狀選單', link: './vue2.html' },
        { type: 'Alex教學', title: '資料切換.動畫', link: './vue3.html' }
    ]
}

let vm = new Vue({
    el: '#app',
    data: data,
    computed: {
        typeMenu() {
            if (this.input.type != '全部'){
                return this.menu.filter( item => {
                    return item.type == this.input.type
            })
            }else{
                return this.menu
            }           
        },
        titleMenu(){
            if(this.input.title){
                return this.typeMenu.filter( item => {
                    let content = item.title.toLowerCase()
                    let keyword = this.input.title.toLowerCase()
                    return content.indexOf(keyword) != -1
                })}
                else{
                return this.typeMenu
                }
        }    
}
})