<script setup lang="ts">
import TheHeaderUser from './TheHeaderUser.vue'
import TheHeaderNotify from './TheHeaderNotify.vue'
import TheHeaderSearch from './TheHeaderSearch.vue'
import TheHeaderBurger from './TheHeaderBurger.vue'
import TheHeaderTitle from './TheHeaderTitle.vue'
</script>

<template>
    <header class="border-b-border flex z-10 fixed left-0 lg:left-[241px] right-0 items-center justify-between border-b-2 bg-white px-2 py-4 text-center text-base sm:px-6 lg:px-10 lg:py-5 lg:text-left">
        <div class="flex w-full items-center justify-center gap-4 sm:justify-start">
            <TheHeaderBurger class="block lg:hidden" />
            <TheHeaderTitle class="mx-auto sm:mx-0" />
        </div>
        <div class="flex items-center gap-2 lg:gap-6">
            <TheHeaderSearch />
            <TheHeaderNotify />
            <TheHeaderUser />
        </div>
    </header>
</template>
