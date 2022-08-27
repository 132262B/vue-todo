<template>
  <v-app class="bg-mainBackgroundColor">
    <v-main>
      <todo-header />
      <!-- <todo-input v-on:addTodoItem="addOneTodo" /> -->
      <todo-input />
      <todo-list-view />
      <!-- <todo-list-view
        v-bind:propsDatas="todoItems"
        v-on:removeTodoItem="removeOneTodo"
        v-on:completeTodoItem="completeTodo"
      /> -->
      <todo-footer />
    </v-main>
  </v-app>
</template>

<script>
import todoHeader from "./components/TodoHeader.vue";
import TodoListView from "./components/TodoListView.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  components: {
    todoHeader,
    TodoListView,
    TodoInput,
    TodoFooter,
  },
  // methods: {
  // addOneTodo(todoItem) {
  //   let obj = { completed: false, item: todoItem };
  //   localStorage.setItem(todoItem, JSON.stringify(obj));
  //   this.todoItems.push(obj);
  // },
  // removeOneTodo(index) {
  //   console.log(this.todoItems[index].item);
  //   localStorage.removeItem(this.todoItems[index].item);
  //   this.todoItems.splice(index, 1);
  // },
  // completeTodo(index) {
  //   this.todoItems[index].completed = !this.todoItems[index].completed;
  //   localStorage.setItem(
  //     this.todoItems[index].item,
  //     JSON.stringify(this.todoItems[index])
  //   );
  // },
  // },
};
</script>

<style>
</style>