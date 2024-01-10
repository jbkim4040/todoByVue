<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { Icon } from "@iconify/vue"

const props = defineProps(
    {
        category: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    }
)

const emits = defineEmits(["edit-category", "update-category", "delete-category"])

const category = ref(props.category)

</script>
<template>
<li>
    <div class="category">
        <input 
            v-if="category.isEditing" 
            style="text"
            :value="category.name"
            @input="$emit('update-category', $event.target.value, index)" 
        />
        <span v-else>{{ category.name }}</span>
    </div>
    <div v-if="category.isEditable" class="category-action">
        <Icon
            v-if="category.isEditing"
            icon="ph:check-circle"
            class="icon check-icon"
            color="41b080"
            width="22"
            @Click="$emit('edit-category', index)"
        />
        <Icon
            v-else
            icon="ph:pencil-fill"
            class="icon edit-icon"
            color="41b080"
            width="22"
            @Click="$emit('edit-category', index)"
        />
        <Icon 
            icon="ph:trash" 
            class="icon trash-icon" 
            color="f95e5e" 
            width="22" 
            @Click="$emit('delete-category', category.id)"
        />
    </div>
</li>
</template>
<style lang="scss" scoped>
    li{
        cursor: pointer;
        
        &:hover{
            .category-action{
                opacity: 1;
            }
        }

        .category-action {
            display: flex;
            gap: 6px;
            opacity: 0;
            transition: 150ms ease-in-out;
        }
    }
</style>