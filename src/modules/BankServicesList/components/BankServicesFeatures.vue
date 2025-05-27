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
    <div class="mb-5 flex overflow-x-scroll justify-between gap-5 xl:flex-row">
        <FeatureCard v-for="item in content" :key="item.id" :title="item.title" :descr="item.descr" :icon="`modules-BankServicesList-icons-features-${item.icon}`" />
    </div>
</template>
