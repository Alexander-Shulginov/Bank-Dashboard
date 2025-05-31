<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import SvgIcon from '@/shared/components/SvgIcon.vue'
import { formatValue } from '@/shared/helpers/formatValueNumber'
import data from '@modules/InvestmentsMy/mock/data.json'
</script>

<template>
    <div class="grow-2">
        <BaseTitle text="My Investment" />
        <div v-if="data" class="flex w-full flex-col gap-3 md:gap-4">
            <div class="radius-base flex items-center gap-3 bg-white p-2 lg:p-4" v-for="item in data" :key="item.id">
                <SvgIcon :name="`modules-InvestmentsMy-icons-${item.icon}`" class="size-[45px] lg:size-[60px]" />
                <div class="flex w-full justify-between">
                    <div class="flex flex-col">
                        <span class="text-dark text-[14px] font-medium lg:text-[16px]">{{ item.title }}</span>
                        <span class="text-board text-sm">{{ item.type }}</span>
                    </div>
                    <div class="hidden sm:flex flex-col">
                        <span class="text-dark text-[14px] font-medium lg:text-[16px]">{{ formatValue(item.sum) }}</span>
                        <span class="text-board text-sm">Investment Value</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-[14px] font-medium text-green-500 lg:text-[16px]">+{{ item.value }}%</span>
                        <span class="text-board text-sm">Return Value</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>No data</div>
    </div>
</template>
