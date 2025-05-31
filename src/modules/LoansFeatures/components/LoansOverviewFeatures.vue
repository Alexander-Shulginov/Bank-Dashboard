<script setup lang="ts">
import FeatureCard from '@/shared/components/FeatureCard.vue'
const content = [
    {
        id: 1,
        title: 'Personal Loans',
        descr: '$50,000',
        icon: 'user',
    },
    {
        id: 2,
        title: 'Corporate Loans',
        descr: '$100,000',
        icon: 'bag',
    },
    {
        id: 3,
        title: 'Business Loans',
        descr: '$500,000',
        icon: 'up',
    },
]
</script>

<template>
    <div class="scrollable mb-6 flex justify-between gap-5 overflow-x-auto lg:mb-10 xl:flex-row xl:overflow-hidden">
        <FeatureCard v-for="item in content" :key="item.id" :title="item.title" :descr="item.descr" :icon="`modules-LoansFeatures-icons-${item.icon}`" />
    </div>
</template>
