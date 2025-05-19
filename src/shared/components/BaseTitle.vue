<script setup lang="ts">
interface Props {
    text: string
}

const { text = 'Title' } = defineProps<Props>()
</script>

<template>
    <h2 class="text-md mb-3 text-base font-semibold md:mb-4 md:text-[20px] lg:mb-5 lg:text-[22px]">{{ text }}</h2>
</template>
