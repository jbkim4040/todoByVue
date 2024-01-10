<script setup>
import { ref, watch, computed, defineProps } from 'vue'
import { Icon } from "@iconify/vue"
import TodoItem from './TodoItem.vue'

const props = defineProps({
    todoList: {
        type: Array,
        required: true
    },
    filterKey: {
        type: String,
        required: true
    }
})

const TodoList = ref(props.todoList);
const filterKey = ref(props.filterKey);

const todoCompleted = computed(() => {
    // todoList의 완료여부 속성이 전부 True인지 검사
    return TodoList.value.every((todo) => todo.isCompleted);
});

watch(props, (newValue) => {
    TodoList.value = newValue.todoList;
    if(newValue.filterKey !== "00000000000"){
        TodoList.value = TodoList.value.filter(todo => todo.categoryId === newValue.filterKey)
    }
} )


const toggleTodoComplete = (todoPos) => {
    TodoList.value[todoPos].isCompleted = !TodoList.value[todoPos].isCompleted;
}

const toggleEditTodo = (todoPos) => {
    TodoList.value[todoPos].isEditing = !TodoList.value[todoPos].isEditing;
}

const updateTodo = (todoVal, todoPos) => {
    TodoList.value[todoPos].todoTitle = todoVal;
}

const deleteTodo = (todoId) => {
    TodoList.value = TodoList.value.filter((todo) => todo.id !== todoId);
}
</script>

<template>
    <div>
        <ul class="todo-list" v-if="TodoList.length > 0">
            <TodoItem 
                v-for="(Todo, index) in TodoList" :key="Todo.id"
                :todo="Todo"
                :index="index"
                @toggle-complete="toggleTodoComplete" 
                @edit-todo="toggleEditTodo"
                @update-todo="updateTodo"
                @delete-todo="deleteTodo"
            />
        </ul>
        <p v-else class="todos-msg">
            <Icon icon="noto-v1:sad-but-relieved-face" />
            <span> 아직은 등록된 할 일이 없네요.. 해야 될 일을 알려주세요!</span>
        </p>
        <p v-if="todoCompleted && TodoList.length > 0" class="todos-msg">
            <Icon icon="noto-v1:party-popper" />
            <span>할 일을 모두 마쳤어요. 대단해요!</span>
        </p>
    </div>
    
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>