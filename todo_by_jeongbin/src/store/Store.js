import { ref } from "vue";

const store = ref(localStorage);
const todoList = ref(JSON.parse(localStorage.getItem("todo-list")));
const categoryList = ref(JSON.parse(localStorage.getItem("category-list")));

export default {};
