<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="1" lg="3" />
        <v-col cols="10" lg="6">
          <v-text-field
            label="할 일을 입력해주세요."
            variant="underlined"
            v-model="newTodoData"
            @keyup.enter="addTodo"
          ></v-text-field>
          <v-btn block variant="text" @click="addTodo">add</v-btn>
        </v-col>
        <v-col cols="1" lg="3" />
      </v-row>
    </v-container>
  </div>

  <div>
    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>경고!</h3>
      </template>

      <template v-slot:body>
        <p>무언가를 입력하세요.</p>
      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "./common/Modal.vue";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      newTodoData: "",
      showModal: false,
    };
  },
  methods: {
    ...mapMutations("todoApp", ["addOneTodo"]),
    addTodo() {
      const inputText = this.newTodoData.trim();
      if (inputText !== "") {
        // this.$emit("addTodoItem", this.newTodoData);
        this.addOneTodo(this.newTodoData);
        this.clearTodo();
      } else {
        this.showModal = true;
      }
    },
    clearTodo() {
      this.newTodoData = "";
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scope>
</style>