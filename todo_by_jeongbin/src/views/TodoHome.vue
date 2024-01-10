<script setup>
import { ref } from 'vue'
import { uid } from "uid";
import CategoryItem from '../components/CategoryItem.vue'
import TodoView from '../components/TodoView.vue'

const CategoryList = ref([
  {
    // id: uid(),
    id: "11111111111",
    name: "기본",
    isEditable: true,
    isEditing: false
  },
  {
    id: "22222222222",
    name: "신규",
    isEditable: true,
    isEditing: false
  },
]);
const TodoList = ref([
    {
        id: uid(),
        todoTitle: "기본 할일",
        todoContent: "", 
        categoryId: "11111111111",
        isEditing: false,
        isCompleted: false
    },
    {
        id: uid(),
        todoTitle: "신규 할일",
        todoContent: "", 
        categoryId: "22222222222",
        isEditing: false,
        isCompleted: false
    }
]);

const filterKey = ref("00000000000")
const filtered = ref(false);

const selectCategory = (categoryId) => {
    filterKey.value = categoryId;
    filtered.value = categoryId !== "00000000000";
};

const deleteCategory = (categoryId) => {
    console.log("삭제할 카테고리 ID :: ", categoryId)
}


const createTodo = () => {

}

</script>

<template>
    <main class="container">
        <CategoryItem 
            :categoryList="CategoryList" 
            @select-category="selectCategory" 
            @delete-category="deleteCategory" 
        />
        <hr>
        <TodoView 
            :todoList="TodoList" 
            :filterKey="filterKey" 
        />
    </main>
</template>

<style>

</style>