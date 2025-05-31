<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <h1 class="text-[22px] font-semibold lg:text-[28px]">{{ route.name }}</h1>
</template>
