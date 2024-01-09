<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const CategoryList = ref(['전체', '기본'])
const isEditing = ref(false)

const props = defineProps({})

const emits = defineEmits(['chage-category'])


const addCategory = () => {
    CategoryList.value.push()
}

</script>

<template>
<div>
    <li 
        @click="$emit('chage-category', Category)" 
        v-for="Category in CategoryList" 
        :key="Category"
    >
        {{ Category }}
    </li>
    <li 
        v-if="!isEditing"  
        @mouseover=" isEditing = !isEditing "
        @mouseleave=" isEditing = !isEditing "
    >+</li>
    <li 
        v-else
        @click="addCategory"
        @mouseleave=" isEditing = !isEditing "
    >
        <input style="text">
    </li>
</div>  
</template>

<style>

</style>