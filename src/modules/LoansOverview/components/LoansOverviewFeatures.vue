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
    // {
    //     id: 4,
    //     title: 'Custom Loans',
    //     descr: 'Choose Money',
    //     icon: 'settings',
    // },
]

</script>

<template>
    <div class="scrollable mb-6 lg:mb-10 flex justify-between gap-5 overflow-x-auto xl:overflow-hidden xl:flex-row">
        <FeatureCard v-for="item in content" :key="item.id" :title="item.title" :descr="item.descr" :icon="`modules-LoansOverview-icons-${item.icon}`" />
    </div>
</template>

