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

export default {
  data() {
    return {
      newTodoData: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoData !== "") {
        this.$emit("addTodoItem", this.newTodoData);
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