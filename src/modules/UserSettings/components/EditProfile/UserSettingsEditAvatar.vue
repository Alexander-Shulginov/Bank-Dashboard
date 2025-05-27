<script setup lang="ts">
import SvgIcon from '@/shared/components/SvgIcon.vue'
</script>

<template>
    <div class="relative inline-block self-center xl:self-start">
        <SvgIcon name="app-layouts-Header-assets-icons-user" class="size-[140px]" />
        <button type="button" aria-label="Edit avatar" class="bg-accent hover:scale-110 transition-transform absolute top-22 right-0 cursor-pointer rounded-full p-2">
            <SvgIcon name="shared-assets-icons-edit" class="size-[16px]" />
        </button>
    </div>
</template>
