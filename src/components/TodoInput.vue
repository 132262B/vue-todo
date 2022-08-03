<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="1" lg="3"></v-col>
        <v-col cols="8" sm="9" lg="5">
          <v-text-field
            label="할 일을 입력해주세요."
            variant="underlined"
            v-model="newTodoData"
            v-on:keyup.enter="addTodo"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn class=".rounded-e-xl" color="buttonColor" v-on:click="addTodo">
            추가하기
          </v-btn>
        </v-col>
        <v-col cols="1" lg="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>
.rounded-e-xl
<script>
export default {
  data: function () {
    return {
      newTodoData: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoData === "") {
        alert("값을 입력해주세요.");
        return;
      }

      let obj = { completed: false, item: this.newTodoData };
      localStorage.setItem(this.newTodoData, JSON.stringify(obj));
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