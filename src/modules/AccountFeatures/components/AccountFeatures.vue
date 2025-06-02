<script setup lang="ts">
import FeatureCard from '@/shared/components/FeatureCard.vue'
const content = [
    {
        id: 1,
        title: 'Balance',
        descr: '$12,750',
        icon: 'balance',
    },
    {
        id: 2,
        title: 'Income',
        descr: '$5,600',
        icon: 'income',
    },
    {
        id: 3,
        title: 'Expense',
        descr: '$3,460',
        icon: 'expense',
    },
    {
        id: 4,
        title: 'Saving',
        descr: '$7,920',
        icon: 'saving',
    },
]
</script>

<template>
    <div class="scrollable mb-5 flex justify-between gap-5 overflow-x-auto md:mb-10 xl:flex-row xl:overflow-hidden">
        <FeatureCard v-for="item in content" :key="item.id" :title="item.title" :descr="item.descr" :icon="`modules-AccountFeatures-icons-${item.icon}`" />
    </div>
</template>
