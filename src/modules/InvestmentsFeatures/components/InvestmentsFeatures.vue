<script setup lang="ts">
import FeatureCard from '@/shared/components/FeatureCard.vue'
const content = [
    {
        id: 1,
        title: 'Total  Amount',
        descr: '$150,000',
        icon: 'money',
    },
    {
        id: 2,
        title: 'Investments',
        descr: '1,250',
        icon: 'percents',
    },
    {
        id: 3,
        title: 'Rate of Return',
        descr: '+5.80%',
        icon: 'loop',
    },
]
</script>

<template>
    <div class="scrollable mb-5 flex justify-between gap-5 overflow-x-auto md:mb-10 xl:flex-row xl:overflow-hidden">
        <FeatureCard v-for="item in content" :key="item.id" :title="item.title" :descr="item.descr" :icon="`modules-InvestmentsFeatures-icons-${item.icon}`" />
    </div>
</template>
