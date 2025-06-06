<script setup lang="ts">
import { RouterView } from 'vue-router'
import { TheHeader } from './layouts/Header'
import { TheSidebar } from './layouts/Sidebar'
</script>

<template>
    <div class="relative min-h-full lg:pl-[238px]">
        <TheSidebar />
        <TheHeader />
        <main class="bg-light min-h-[100vh] px-2 py-5 pt-[90px] sm:px-6 lg:px-10 lg:pt-[100px] lg:pb-6">
            <router-view />
        </main>
    </div>
</template>
