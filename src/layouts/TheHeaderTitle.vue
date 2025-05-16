<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <h1 class="text-[22px] lg:text-[28px] font-semibold">{{ route.name }}</h1>
</template>

<style lang="scss" scoped></style>
