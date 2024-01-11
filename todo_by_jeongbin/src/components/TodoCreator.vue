<script setup>
import { ref, reactive, watch } from 'vue'

const categoryList = ref(JSON.parse(localStorage.getItem("category-list")));
const emit = defineEmits(["create-todo"])
const seletedCategory = ref("")

watch(localStorage, {
    handler(newValue) {
        categoryList.value = JSON.parse(newValue.getItem("category-list"))
    },
    deep: true,
    }
)

const selectCategory = () => {
  seletedCategory.value = event.target.value;
}


const todoState = reactive({
    todo: "",
    invalid: null,
    errMsg: ""
});

const createTodo = () => {
    todoState.invalid = null;
    if(todoState.todo !== "") {
      emit("create-todo", todoState.todo, seletedCategory.value);
      todoState.todo = "";
      return;
    }
    todoState.invalid = true;
    todoState.errMsg = "입력란이 비어있어요. 확인해주세요!"
};

</script>

<template>
  <div class="input-wrap" :class="{ 'input-err' : todoState.invalid }">
    <select @change="selectCategory($event)">
      <option
        v-for="category in categoryList" 
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </select>
    <input type="text" v-model="todoState.todo">
    <button @click="createTodo()">
        Create
    </button>
  </div>
  <p v-show="todoState.invalid" class="err-msg">{{  todoState.errMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    border: none;
  }
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}

button {
  padding: 8px 16px;
  border: none;
}
</style>