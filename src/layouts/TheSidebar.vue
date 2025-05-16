<script setup lang="ts">
import TheSidebarLogo from '@/layouts/TheSidebarLogo.vue'
import TheSidebarMenu from '@/layouts/TheSidebarMenu.vue'
import { useSidebar } from '@/store/store'

const { isOpen } = useSidebar()
</script>

<template>
    <aside
        class="bg-light border-r-border absolute top-15 h-full overflow-hidden border-r-2 pr-4 transition-all duration-500 lg:static lg:pr-0"
        :class="{
            'visible left-0': isOpen,
            'invisible left-[-100%]': !isOpen,
        }"
    >
        <TheSidebarLogo class="hidden lg:flex" />
        <TheSidebarMenu />
    </aside>
</template>
