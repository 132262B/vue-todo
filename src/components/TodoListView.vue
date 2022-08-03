<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="1" lg="3"></v-col>
        <v-col cols="10" lg="6">
          <v-card
            class="mx-auto mb-3"
            width="auto"
            v-for="(todoItem, index) in todoItems"
            v-bind:key="todoItem"
          >
            <template v-slot:title>
              <!-- 체크 아이콘 -->
              <v-icon
                class="text-h4 float-left pa-1 mr-4 iconColorGray"
                v-bind:class="{ iconColorDone: todoItem.completed }"
                icon="mdi-check"
                v-on:click="completeTodo(todoItem, index)"
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
                v-on:click="removeTodo(todoItem, index)"
              />
            </template>
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
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    completeTodo(todoItem, index) {
      todoItem.completed = true;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const storageItem = JSON.parse(
          localStorage.getItem(localStorage.key(i))
        );
        this.todoItems.push(storageItem);
      }
    }
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
</style>