<script setup lang="ts">
import SvgIcon from '@/shared/components/SvgIcon.vue'
import data from '../mock/data.json'
</script>

<template>
    <div class="flex flex-col gap-2 md:gap-5">
        <div v-for="item in data" :key="item.id" class="flex items-center justify-between gap-4 rounded-[10px] bg-white p-3 md:rounded-[20px] md:p-4">
            <div class="flex items-center gap-3 md:gap-5">
                <SvgIcon :name="`modules-BankServicesList-icons-${item.icon}`" class="size-[45px] shrink-0 md:size-[60px]" />
                <div class="flex flex-col">
                    <div class="line-clamp-1 text-[14px] font-medium md:text-[16px]">{{ item.title }}</div>
                    <div class="text-[12px] text-[#718ebf] md:text-[15px]">{{ item.descr }}</div>
                </div>
            </div>

            <button type="button" class="hover:text-accent hover:border-accent shrink-0 cursor-pointer justify-self-end rounded-full border-[#718ebf] text-xs font-medium text-[#718ebf] transition-colors md:border-1 md:px-8 md:py-2 md:text-[16px]">
                View Details
            </button>
        </div>
    </div>
</template>
