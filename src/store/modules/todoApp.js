
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {

            for (let i = 0; i < localStorage.length; i++) {
                const storageItem = JSON.parse(
                    localStorage.getItem(localStorage.key(i))
                );
                arr.push(storageItem);
            }
        }

        return arr;
    }
}

const state = {
    todoTime: '04:45',
    todoItems: storage.fetch(),
}

const getters = {
    getTodoItems(state) {
        return state.todoItems;
    }
}

const mutations = {
    addOneTodo(state, todoItem) {
        let obj = { completed: false, item: todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneTodo(state, index) {
        localStorage.removeItem(state.todoItems[index].item);
        state.todoItems.splice(index, 1);
    },
    completeTodo(state, index) {
        state.todoItems[index].completed = !state.todoItems[index].completed;
        localStorage.setItem(
            state.todoItems[index].item,
            JSON.stringify(state.todoItems[index])
        );
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}