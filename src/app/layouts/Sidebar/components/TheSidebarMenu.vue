<script setup lang="ts">
import SvgIcon from '@/shared/components/SvgIcon.vue'
import { useSidebar } from '@/app/layouts/Sidebar/store/store'

const { isOpen } = useSidebar()

const closeSideBar = () => {
    if (window.innerWidth < 1024) {
        isOpen.value = false
    }
}

const iconsPath = 'app-layouts-Sidebar-assets-icons-'

const menuItems = [
    {
        name: 'Home',
        icon: iconsPath + 'home',
        route: '/',
    },
    {
        name: 'Transaction',
        icon: iconsPath + 'transaction',
        route: 'transactions',
    },
    {
        name: 'Accounts',
        icon: iconsPath + 'account',
        route: 'accounts',
    },
    {
        name: 'Investments',
        icon: iconsPath + 'invest',
        route: 'investments',
    },
    {
        name: 'Credit Cards',
        icon: iconsPath + 'credit',
        route: 'credit-cards',
    },
    {
        name: 'Loans',
        icon: iconsPath + 'loans',
        route: 'loans',
    },
    {
        name: 'Services',
        icon: iconsPath + 'services',
        route: 'services',
    },
    {
        name: 'Settings',
        icon: iconsPath + 'settings',
        route: 'settings',
    },
]
</script>

<template>
    <nav>
        <ul class="px-5 pt-5 lg:px-10 lg:pt-0">
            <li v-for="item in menuItems" :key="item.name" @click="closeSideBar" class="mb-3 lg:mb-5">
                <RouterLink :to="item.route" :aria-label="item.name" class="group relative flex items-center gap-6.5 outline-none">
                    <SvgIcon :name="item.icon" class="transition-colors group-hover:fill-[#1814f3] group-focus:fill-[#1814f3] group-[.router-link-active]:fill-[#1814f3]" fill="#b1b1b1" width="25" height="25" />

                    <span class="text-sidebar group-hover:text-accent group-[.router-link-active]:text-accent group-focus:text-accent text-sm font-medium transition-colors lg:text-lg">{{ item.name }}</span>

                    <span class="bg-accent absolute top-[50%] -left-5 hidden h-[40px] w-[4px] translate-y-[-50%] rounded-tr-[10px] rounded-br-[10px] group-[.router-link-active]:inline lg:-left-10 lg:h-[60px] lg:w-[6px]"></span>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
