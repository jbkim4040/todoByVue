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

const emits = defineEmits(["select-category", "delete-category"]);

const store = ref(localStorage)
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

  store.value.setItem('category-list', JSON.stringify(CategoryList.value));
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
    <v-card>
        <v-tabs
            bg-color="teal-darken-3"
            show-arrows
            slider-color="teal-lighten-3"
        >
            <v-tab @click="$emit('select-category', '00000000000')">전체</v-tab>
            <v-tab
                v-for="Category in CategoryList"
                :key="Category.categoryId"
            >
                {{ Category.name }}
            </v-tab>
            <v-tab @click="addCategory">+</v-tab>
        </v-tabs>
    </v-card>
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
ul {
    list-style:none;
}

li {
    cursor: pointer;
    float: left;
}

</style>>
