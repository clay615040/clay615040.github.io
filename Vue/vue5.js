; (function (Vue) {
    new Vue({
        el: '#app',
        data: {
            loading: false,
            contacts: [],
            editIndex: null,
            input: {
                name: '',
                email: ''
            }
        },
        methods: {
            submitHandler() {
                let { name, email } = this.input
                if (!name || !email) return
                this.loading = true
                if (this.editIndex === null) {
                    axios.post('http://localhost:80/contact', this.input)
                        .then((res) => {
                            this.contacts.push(res.data)
                            this.cancelHandler()
                            this.loading = false
                        }).catch((err) => {
                            console.log(err);
                        })
                } else {
                    let id = this.contacts[this.editIndex].id
                    axios.put('http://localhost:80/contact/' + id, this.input)
                        .then((res) => {
                            this.contacts[this.editIndex] = res.data
                            this.cancelHandler()
                            this.loading = false
                        }).catch((err) => {
                            console.log(err);
                        })
                }

            },
            cancelHandler() {
                this.editIndex = null
                this.input.name = ''
                this.input.email = ''

                // this.input = [
                //     name = '',
                //     email = ''
                // ]
            },
            deleteHandler(index) {
                let target = this.contacts[index]
                if (confirm(`是否刪除 ${target.name} ?`)) {
                    this.loading = true
                    axios.delete('http://localhost:80/contact/' + target.id)
                        .then((res) => {
                            this.contacts.splice(index, 1)
                            this.cancelHandler()
                            this.loading = false
                        }).catch((err) => {
                            console.log(err);
                        })
                }
            },
            editHandler(index) {
                let { name, email } = this.contacts[index]
                this.input.name = name
                this.input.email = email
                this.editIndex = index
                this.input = {
                    name,
                    email
                }
            }
        },
        mounted() {
            this.loading = true
            axios.get('http://localhost:80/contact')
                .then((res) => {
                    this.contacts = res.data
                    this.loading = false
                }).catch((err) => {
                    console.log(err);
                })
        }
    })

})(Vue)