<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import SvgIcon from '@/shared/components/SvgIcon.vue'

const transactionData = [
    {
        operation: 'Deposit from my Card',
        date: '28 January 2025',
        type: 'incoming',
        sum: 5800,
        icon: 'modules-RecentTransaction-assets-icons-card',
    },
    {
        operation: 'Deposit Paypal',
        date: '25 January 2025',
        type: 'outgoing',
        sum: 800,
        icon: 'modules-RecentTransaction-assets-icons-paypal',
    },
    {
        operation: 'Deposit Paypal',
        date: '21 January 2025',
        type: 'incoming',
        sum: 1200,
        icon: 'modules-RecentTransaction-assets-icons-buy',
    },
]

console.log(transactionData)
</script>

<template>
    <div class="grow-2">
        <BaseTitle text="Recent transaction" />
        <div class="radius-base bg-white p-5 md:p-4 lg:p-6">
            <ul class="flex flex-col gap-3">
                <li v-for="(item, index) in transactionData" :key="index" class="flex items-center justify-baseline gap-3">
                    <SvgIcon :name="item.icon" class="size-[50px]" />
                    <div>
                        <div class="text-dark text-md font-medium">{{ item.operation }}</div>
                        <div class="text-board text-sm lg:text-[15px]">{{ item.date }}</div>
                    </div>
                    <div class="text-right text-sm font-medium lg:text-[16px]">
                        <div v-if="item.type === 'incoming'" class="text-success">+${{ item.sum }}</div>
                        <div v-else class="text-error f">-${{ item.sum }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
