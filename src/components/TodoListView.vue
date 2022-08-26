<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="1" lg="3"></v-col>
        <v-col cols="10" lg="6">
          <TransitionGroup name="list" tag="v-card">
            <v-card
              class="mx-auto mb-3"
              width="auto"
              v-for="(todoItem, index) in this.todoItem"
              v-bind:key="todoItem"
            >
              <template v-slot:title>
                <!-- 체크 아이콘 -->
                <v-icon
                  class="text-h4 float-left pa-1 mr-4 iconColorGray"
                  v-bind:class="{ iconColorDone: todoItem.completed }"
                  icon="mdi-check"
                  @click="completeTodo(index)"
                />

                <!-- 내용 -->
                <span
                  v-bind:class="{ textColorDone: todoItem.completed }"
                  class="text-body-1"
                  >{{ todoItem.item }}
                </span>
                <!-- 삭제 아이콘 -->
                <v-icon
                  class="text-h5 float-right pa-1 iconColorGray"
                  icon="mdi-delete"
                  @click="removeTodo(index)"
                />
              </template>
            </v-card>
          </TransitionGroup>
        </v-col>
        <v-col cols="1" lg="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    // mutations 에서는 선언하지 않아도 상단에서 암묵적으로 객체를 넘김.
    ...mapMutations("todoApp", {
      removeTodo: "removeOneTodo",
    }),
    //removeTodo(index) {
    // this.$emit("removeTodoItem", index);
    // this.$store.commit("removeOneTodo", index);
    //},
    ...mapMutations("todoApp", {
      completeTodo: "completeTodo",
    }),
    // completeTodo(index) {
    // this.$emit("completeTodoItem", index);
    //   this.$store.commit("completeTodo", index);
    // },
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.getTodoItems;
    // },
    //...mapGetters(["getTodoItems"]),
    ...mapGetters("todoApp", {
      todoItem: "getTodoItems",
    }),
  },
};
</script>

<style>
.iconColorGray {
  color: #b3adad;
}
.iconColorDone {
  color: #49a0e5;
}

.textColorDone {
  text-decoration: line-through;
  color: #b3adad;
}

.list-enter-active,
.list-leave-active {
  transition: all 2s;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>