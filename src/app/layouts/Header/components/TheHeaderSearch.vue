<script setup lang="ts">
import SvgIcon from '@/shared/components/SvgIcon.vue'
</script>

<template>
    <search role="search" class="hidden sm:block">
        <form @submit.prevent class="relative">
            <input class="bg-light max-w-[255px] rounded-[40px] py-1.5 pr-6 pl-12 lg:py-2.5" type="text" placeholder="Search for something" name="user-search" id="search-input" />
            <label for="search-input" class="absolute top-[50%] left-4 translate-y-[-50%]">
                <SvgIcon name="app-layouts-Header-assets-icons-search" width="20" height="20" />
            </label>
        </form>
    </search>
</template>
