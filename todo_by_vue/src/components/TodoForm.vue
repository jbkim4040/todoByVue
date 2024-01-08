<template>
  <div>
    <input v-model="todo.content" placeholder="오늘의 할일">
    <button @click="addTodo(todo)">추가</button>
  </div>
  <hr>
  <div v-for="todo in todoList" :key="todo.index">
    <tr>
      <td>{{todo.index}}</td>
      <td>{{todo.content}}</td>
      <td>{{todo.category}}</td>
    </tr>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const number = ref(1)
    const todo = ref({
      index: number.value++,
      content: "",
      status: false,
      category: "기본"
    });
    const todoList = ref([]);


    function addTodo(newTodo) {
        console.log(newTodo)
        todoList.value.push(newTodo)
    }


    return {
      todo,
      todoList,
      addTodo
    }
  }
}
</script>