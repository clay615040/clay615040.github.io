var app = new Vue({
    el:"#box",
    data:{
        todos:[],
        newtodo:''
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push({content:todo , completed:false});
            $("#aa2").val("123");
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo),1);
        }
    }
});