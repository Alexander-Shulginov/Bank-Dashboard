<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import SvgIcon from '@/shared/components/SvgIcon.vue'

import transactionData from '@modules/RecentTransaction/mock/data.json'
</script>

<template>
    <div class="grow-2">
        <BaseTitle text="Recent transaction" />
        <div class="radius-base bg-white p-2 md:p-4 lg:p-4">
            <ul v-if="transactionData.length" class="flex flex-col">
                <li v-for="(item, index) in transactionData" :key="index" class="flex cursor-pointer items-center justify-baseline gap-3 rounded-lg hover:bg-gray-100 p-1 lg:p-2">
                    <SvgIcon :name="item.icon" class="size-[50px] shrink-0" />
                    <div>
                        <div class="text-dark no-wrap lg:text-md line-clamp-1 text-sm font-medium">{{ item.operation || 'Unknown operation' }}</div>
                        <div class="text-board text-[12px] lg:text-sm lg:text-[15px]">{{ item.date || 'Unknown date' }}</div>
                    </div>
                    <div v-if="item.sum" class="grow-2 text-right text-sm font-medium lg:text-[16px]">
                        <div v-if="item.type === 'incoming'" class="text-success">+${{ item.sum }}</div>
                        <div v-else class="text-error f">-${{ item.sum }}</div>
                    </div>
                </li>
            </ul>
            <div v-else class="text-center text-base">No transactions to display</div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
