<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import SvgIcon from '@/shared/components/SvgIcon.vue'

const data = [
    {
        id: 1,
        title: 'Block Card',
        descr: 'Instantly block your card',
        icon: 'card',
    },
    {
        id: 2,
        title: 'Change Pin Code',
        descr: 'Choose another pin code',
        icon: 'lock',
    },
    {
        id: 3,
        title: 'Add to Google Pay',
        descr: 'Withdraw without any card',
        icon: 'google',
    },
    {
        id: 4,
        title: 'Add to Apple Pay',
        descr: 'Withdraw without any card',
        icon: 'tran',
    },
    {
        id: 5,
        title: 'Add to Apple Store',
        descr: 'Withdraw without any card',
        icon: 'tran',
    },
]
</script>

<template>
    <div class="w-full grow-2">
        <BaseTitle text="Card Setting" />
        <div class="radius-base flex flex-col gap-2 bg-white p-4 md:gap-3.5 md:p-8">
            <div v-for="item in data" :key="item.id" class="flex cursor-pointer items-center gap-3">
                <SvgIcon class="size-[45px] md:size-[60px]" :name="`modules-CreditCardsSettings-icons-${item.icon}`" />
                <div class="flex flex-col">
                    <span class="text-dark text-[14px] font-medium lg:text-[16px]">{{ item.title }}</span>
                    <span class="text-board text-sm">{{ item.descr }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
