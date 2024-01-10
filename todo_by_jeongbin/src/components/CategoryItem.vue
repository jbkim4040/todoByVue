<script setup>
import { ref, emit, defineProps, defineEmits } from "vue";
import { uid } from "uid";
import CategoryItem from "./Category.vue"

const props = defineProps(
    {
        categoryList: {
            type: Array,
            required: true
        }
    }   
);

const emits = defineEmits(["select-category", "modify-category", "delete-category"]);


const CategoryList = ref(props.categoryList);
const isEditing = ref(false);


const toggleEditCategory = (categoryPos) => {
    CategoryList.value[categoryPos].isEditing = !CategoryList.value[categoryPos].isEditing;
}

const addCategory = () => {
  CategoryList.value.push({
    id: uid(),
    name: "신규",
    isEditable: true,
    isEditing: false
  });
};

const updateCategory = (newCategoryName, categoryPos) => {
    CategoryList.value[categoryPos].name = newCategoryName;
}


const deleteCategory = (categoryId) => {
    CategoryList.value = CategoryList.value.filter(category => category.id !== categoryId);
    emit("delete-category", categoryId);
}
</script>

<template>
  <div>
    <ul>
        <li @click="$emit('select-category', '00000000000')">전체</li>
        <CategoryItem
            @click="$emit('select-category', Category.id)"
            v-for="(Category, index) in CategoryList"
            :key="Category.categoryId"
            :category="Category"
            :index="index"
            @delete-category="deleteCategory"
            @update-category="updateCategory"
            @edit-category="toggleEditCategory"
        >
            {{ Category.name }}
        </CategoryItem>
      <li @click="addCategory">+</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
li {
    cursor: pointer
}

</style>>
