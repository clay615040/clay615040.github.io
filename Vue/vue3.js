let data = {
    index: 0,
    menu: [
        { type: '船長', title: '蒙其·D·魯夫', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFgGIVFiP8JRne7g6Erh3xwkn5CxhC0qhA92KYIc6fZ3RWBRG&s' },
        { type: '戰鬥員（劍士）', title: '羅羅亞·索隆', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgRHkDm6ZU5-IqffJ3cbuJKdW5KyGGgEQqHC0TA8xtZpzpM13Dw&s' },
        { type: '航海士', title: '娜美', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPEuIKMvWPedM5b82yrz44KKC2inHEBHsE-kateYE6FqEe23E&s' }
        ,
        { type: '狙擊手', title: '騙人布', link: 'https://pic.pimg.tw/sandy21/4965c9b039f05.jpg' }
        ,
        { type: '廚師', title: '賓什莫克·香吉士', link: 'https://g.udn.com.tw/community/img/PSN_PHOTO/chobitsbox/f_2422733_1.jpg' }
        ,
        { type: '船醫', title: '多尼多尼·喬巴', link: 'https://pic.pimg.tw/chimfly/1314296759-2542cda2cf5c5fe115b35c926c532565.jpg' }
        ,
        { type: '考古學家', title: '妮可·羅賓', link: 'https://i1.achangpro.com/img.inmywordz.com/uploads/20170901164605_14.jpg' }
        ,
        { type: '船匠', title: '佛朗基', link: 'https://img.ruten.com.tw/s2/2/e7/be/21647492265918_722.jpg' },
        { type: '音樂家', title: '布魯克', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxip14rxTq9E1dYd1U5Mr-5hKWgdu-2XocA-VuoT92IU3q2jIh&s' }
        ,
        { type: '掌舵手', title: '吉貝爾', link: 'https://pic.pimg.tw/llehsgge/4b5731bbe3275.jpg' }
        ,
        { type: '公主', title: '納菲魯塔利·薇薇', link: 'http://4.bp.blogspot.com/_4F246akEcH8/TIyWdq-HKlI/AAAAAAAAAqY/cybCF1XBKsw/s1600/1097807728.jpg' }

    ]
}

let vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        changeIndex(change) {
            this.index += change;
        }
    }
 
})


