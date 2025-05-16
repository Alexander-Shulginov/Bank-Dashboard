<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'
</script>

<template>
    <RouterLink to="/" class="focus-visible:outline-accent mx-2 my-2 flex items-center gap-4 focus-visible:outline-2" aria-label="Logo">
        <SvgIcon name="logo" width="68" height="68" />
        <span class="text-xl font-bold text-[#343c6a]">BankBoard</span>
    </RouterLink>
</template>
