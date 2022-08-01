<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="11" xs="8">
          <v-text-field
            label="Things to do today"
            variant="solo"
            single-line
            v-model="newTodoData"
            v-on:keyup.enter="addTodo"
          ></v-text-field>
        </v-col>
        <v-col cols="1" xs="4">
          <v-btn
            variant="outlined"
            size="large"
            icon
            color="info"
            v-on:click="addTodo"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoData: "",
    };
  },
  methods: {
    addTodo() {
      localStorage.setItem("ToDoListData", this.newTodoData);
      console.log(localStorage.length);

      this.clearTodo();
    },
    clearTodo() {
      this.newTodoData = "";
    },
  },
};
</script>

<style scope>
</style>