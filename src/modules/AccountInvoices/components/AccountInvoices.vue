<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import SvgIcon from '@/shared/components/SvgIcon.vue'

const data = [
    {
        id: 1,
        operation: 'Apple Store',
        date: '5h ago',
        sum: '$450',
    },
    {
        id: 2,
        operation: 'Michael',
        date: '2 days ago',
        sum: '$160',
    },
    {
        id: 3,
        operation: 'Playstation',
        date: '5 days ago',
        sum: '$1085',
    },
    {
        id: 4,
        operation: 'William',
        date: '10 days ago',
        sum: '$90',
    },
]
</script>

<template>
    <div>
        <BaseTitle text="Invoices Sent" />
        <div class="radius-base flex flex-col gap-4 bg-white p-3 lg:p-6">
            <div v-for="(item, index) in data" :key="item.id" class="flex items-center  gap-4 w-full">
                <SvgIcon :name="`modules-AccountInvoices-icons-icon-${index + 1}`" class="size-[45px] shrink-0 lg:size-[60px]" />
                <div class="flex flex-col">
                    <div class="text-dark text-[14px] lg:text-[16px]">{{ item.operation }}</div>
                    <div class="text-board text-sm">{{ item.date }}</div>
                </div>
                <div class="text-dark grow-2 text-end text-[14px] lg:text-[16px]">{{ item.sum }}</div>
            </div>
        </div>
    </div>
</template>
