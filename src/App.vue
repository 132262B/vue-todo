<template>
  <v-app>
    <v-main>
      <todo-header />
      <todo-input />
      <todo-list-view />
      <todo-footer />
    </v-main>
  </v-app>
</template>

<script>
import todoHeader from "@/components/TodoHeader.vue";
import TodoListView from "@/components/TodoListView.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoFooter from "@/components/TodoFooter.vue";

export default {
  name: "App",

  components: {
    todoHeader,
    TodoListView,
    TodoInput,
    TodoFooter,
  },

  data: () => ({
    //
  }),
};
</script>
