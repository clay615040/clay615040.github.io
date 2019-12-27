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
        { type: 'Alex教學', title: '資料切換.動畫', link: './vue3.html' },
        { type: 'Alex教學', title: '資料觀測與設定', link: './vue4.html' },
        { type: 'Alex教學', title: 'API串接通訊錄', link: './vue5.html' },
        { type: '六角學院', title: '生命週期', link: './vue6.html' },
        { type: '六角學院', title: '互動式行為v-on指令', link: './sixvue2.html' },
        { type: '六角學院', title: '切換 Class', link: './sixvue3.html' },
        { type: '六角學院', title: '表單雙向綁定', link: './sixvue4.html' },
        { type: '六角學院', title: 'Vue元件化', link: './sixvue5.html' },
        { type: '六角學院', title: 'To-Do List', link: './sixvue6.html' },
        { type: '六角學院', title: '基礎模板語法', link: './sixvue7.html' },
        { type: '六角學院', title: '切換樣式', link: './sixvue8.html' },
        { type: '六角學院', title: 'v-for 迴圈', link: './sixvue9.html' },
        { type: '六角學院', title: 'v-if 模板判斷', link: './sixvue10.html' },
        { type: '六角學院', title: '計算及監聽', link: './sixvue11.html' },
        { type: '六角學院', title: '表單補充', link: './sixvue12.html' },
    ]
}

let vm = new Vue({
    el: '#app',
    data: data,
    computed: {
        typeMenu() {
            if (this.input.type != '全部') {
                return this.menu.filter(item => {
                    return item.type == this.input.type
                })
            } else {
                return this.menu
            }
        },
        titleMenu() {
            if (this.input.title) {
                return this.typeMenu.filter(item => {
                    let content = item.title.toLowerCase()
                    let keyword = this.input.title.toLowerCase()
                    return content.indexOf(keyword) != -1
                })
            }
            else {
                return this.typeMenu
            }
        }
    }
})