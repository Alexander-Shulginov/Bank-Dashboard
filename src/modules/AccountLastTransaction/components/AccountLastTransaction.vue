<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import SvgIcon from '@/shared/components/SvgIcon.vue'

import data from '@modules/AccountLastTransaction/mock/data.json'
</script>

<template>
    <div>
        <BaseTitle text="Last Transaction" />
        <div class="radius-base flex flex-col gap-4 bg-white p-3 lg:p-6">
            <div v-for="item in data" class="grid grid-cols-2 items-center gap-3 sm:grid-cols-4" :key="item.id">
                <div class="flex shrink-0 items-center gap-3">
                    <SvgIcon :name="`modules-AccountLastTransaction-icons-${item.icon}`" class="size-[45px] shrink-0 lg:size-[60px]" />
                    <div class="flex flex-col shrink-0">
                        <span class="text-dark text-[14px] font-medium lg:text-[16px]">{{ item.title }}</span>
                        <div class="text-board text-sm">{{ item.date }}</div>
                    </div>
                </div>
                <span class="text-board hidden justify-self-center text-sm sm:block">{{ item.category }}</span>
                <span class="text-board hidden justify-self-center text-sm sm:block">{{ item.card }}</span>
                <span class="text-board justify-self-end text-sm sm:justify-self-center">{{ item.status }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
