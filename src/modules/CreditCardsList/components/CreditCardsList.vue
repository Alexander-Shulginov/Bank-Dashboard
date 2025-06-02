<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import SvgIcon from '@/shared/components/SvgIcon.vue'

const data = [
    {
        id: 1,
        type: 'Secondary',
        bank: 'DBL Bank',
        number: '**** **** 5600',
        name: 'William',
    },
    {
        id: 2,
        type: 'Secondary',
        bank: 'BRC Bank',
        number: '**** **** 4300',
        name: 'Michel',
    },
    {
        id: 3,
        type: 'Secondary',
        bank: 'ABM Bank',
        number: '**** **** 7560',
        name: 'Edward',
    },
    {
        id: 4,
        type: 'Secondary',
        bank: 'DSL Bank',
        number: '**** **** 1200',
        name: 'William',
    },
]
</script>

<template>
    <div class="grow-2">
        <BaseTitle text="Card List" />
        <div class="radius-base flex flex-col gap-3 lg:gap-6.5 bg-white p-3 md:p-4">
            <div v-for="(item, index) in data" :key="item.id" class="flex items-center gap-4 justify-between">
                <div class="flex items-center gap-3">
                    <SvgIcon :name="`modules-CreditCardsList-icons-icon-${index + 1}`" class="size-[45px] md:size-[60px]" />
                    <div class="hidden flex-col sm:flex">
                        <span class="text-dark text-[14px] font-medium lg:text-[16px]">Card Type</span>
                        <span class="text-board text-sm">{{ item.type }}</span>
                    </div>
                </div>
                <div class="hidden flex-col sm:flex">
                    <span class="text-dark text-[14px] font-medium lg:text-[16px]">Bank</span>
                    <span class="text-board text-sm">{{ item.bank }}</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-dark text-[14px] font-medium lg:text-[16px]">Card Number</span>
                    <span class="text-board text-sm">{{ item.number }}</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-dark text-[14px] font-medium lg:text-[16px]">Card Holder</span>
                    <span class="text-board text-sm">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
