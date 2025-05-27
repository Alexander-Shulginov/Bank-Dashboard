<script setup lang="ts">
import FeatureCard from '@/shared/components/FeatureCard.vue'
const content = [
    {
        id: 1,
        title: 'Life Insurance',
        descr: 'Unlimited protection',
        icon: 'heart',
    },
    {
        id: 2,
        title: 'Shopping',
        descr: 'Buy. Think. Grow.',
        icon: 'shop',
    },
    {
        id: 3,
        title: 'Safety',
        descr: 'We are your allies',
        icon: 'guard',
    },
]
</script>

<template>
    <div class="scrollable mb-5 flex justify-between gap-5 overflow-x-auto xl:overflow-hidden xl:flex-row">
        <FeatureCard v-for="item in content" :key="item.id" :title="item.title" :descr="item.descr" :icon="`modules-BankServicesList-icons-features-${item.icon}`" />
    </div>
</template>

<style>
.scrollable {
    scrollbar-width: thin;
    scrollbar-color: #718ebf #fff;
}

.scrollable::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

.scrollable::-webkit-scrollbar-thumb {
    background-color: #718ebf;
    border-radius: 6px;
    border: 3px solid #eee;
}

.scrollable::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 6px;
}
</style>
