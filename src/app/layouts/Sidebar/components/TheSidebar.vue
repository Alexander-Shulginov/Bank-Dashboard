<script setup lang="ts">
import TheSidebarLogo from '@/app/layouts/Sidebar/components/TheSidebarLogo.vue'
import TheSidebarMenu from '@/app/layouts/Sidebar/components/TheSidebarMenu.vue'
import { useSidebar } from '@/app/layouts/Sidebar/store/store'

const { isOpen } = useSidebar()
</script>

<template>
    <aside
        class="bg-light border-r-border fixed top-15 z-10 h-full overflow-hidden border-r-2 pr-6 transition-all duration-500 lg:top-0 lg:pr-0"
        :class="{
            'visible left-0': isOpen,
            'invisible left-[-100%]': !isOpen,
        }"
    >
        <TheSidebarLogo class="hidden lg:flex" />
        <TheSidebarMenu />
    </aside>
</template>
