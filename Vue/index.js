let data = {
    input: {
        type: 'Alex教學',
        title: ''
    },
    menu: [
        {type:'Alex教學',title:'表單雙向資料',link:'./vue1.html'},
        {type:'六角學院',title:'代辦表單',link:'./sixvue1.html'}
    ]
}

let vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        inputHandler() {
            if (this.input.title) {
                let { type, title } = this.input
                this.menu.push({
                    type,
                    title,
                    link: 'javascript:;'
                })
                this.input.title = ''
            }
        }
    }
})