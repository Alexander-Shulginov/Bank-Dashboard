<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import BankCard from './BankCard.vue'
</script>

<template>
    <div class="grow-2">
        <div class="flex items-center justify-between">
            <BaseTitle text="My cards" />
            <RouterLink to="credit-cards" class="text-md text-base font-semibold lg:text-[17px]">See all</RouterLink>
        </div>
        <div class="flex items-center justify-between gap-2">
            <BankCard />
            <BankCard />
        </div>
    </div>
</template>
