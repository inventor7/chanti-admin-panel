<template>
    <div class=" text-red-500 font-bold text-center p-4 bg-red-100 rounded-md">
        <span>{{ message  }}</span>
    </div>
</template>

<script setup >
import { defineProps } from 'vue'

const props = defineProps({
    message: {
        type: String,
        required: true,
    },
})


</script>


