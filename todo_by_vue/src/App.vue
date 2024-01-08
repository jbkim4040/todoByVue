<template>
  <TodoForm></TodoForm>
  <TodoViewer></TodoViewer>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoViewer from "./components/TodoViewer.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    TodoForm,
    TodoViewer
},
};
</script>

<style>
</style>