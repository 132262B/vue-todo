<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="1" lg="3"></v-col>
        <v-col cols="10" lg="6">
          <v-card
            class="mx-auto mb-3"
            width="auto"
            prepend-icon="mdi-check"
            v-for="todoItem in todoItems"
            v-bind:key="todoItem"
          >
            <template v-slot:title>
              <span class="text-body-1">{{ todoItem }}</span>
              <v-icon
                class="text-h5 float-right pa-1"
                icon="mdi-delete"
                v-on:click="removeTodo"
              ></v-icon
            ></template>
          </v-card>
        </v-col>
        <v-col cols="1" lg="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeTodo() {
      console.log("removeTodoButton!");
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        console.log(i);
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
};
</script>

<style>
</style>