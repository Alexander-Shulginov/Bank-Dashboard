<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './layouts/TheHeader.vue'
import TheSidebar from './layouts/TheSidebar.vue'
</script>

<template>
    <div class="relative grid h-full grid-cols-1 lg:grid-cols-[260px_1fr]">
        <TheSidebar />
        <div>
            <TheHeader />
            <main class="bg-light h-full px-6 py-5 lg:px-10 lg:py-6">
                <router-view v-slot="{ Component, route }">
                    <transition name="fade">
                        <component :is="Component" :key="route.path" />
                    </transition>
                </router-view>
            </main>
        </div>
    </div>
</template>

<!-- <style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style> -->
