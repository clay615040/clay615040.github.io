var app = new Vue({
    el:"#box",
    data:{
        todos:[],
        newtodo:''
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push({content:todo , completed:false});
            this.newTodo = "";
            
        },
        
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo),1);
        }
    }
});