Vue.createApp({
  data() {
    return {
      newTodo: "",
      addTodo: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length < 5) {
        alert("Todos must be at least 5 characters long.");
        return;
      }
      this.todos.push({ text: this.newtodo, done: false });
      this.newTodo = '';
    },
    removeTodo(index) {
      this.todo.splice(index, 1);
    },
  },
});

app.mount("#app");
