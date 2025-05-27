<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'

interface FeatureProps {
    title: string
    descr: string
    icon: string
}

defineProps<FeatureProps>()
</script>

<template>
    <div class="mb-2 flex shrink-0 items-center gap-3 rounded-[15px] bg-white p-5.5 md:rounded-[20px] lg:gap-6 lg:p-6.5 xl:rounded-[25px]">
        <SvgIcon :name="icon" class="size-[45px] shrink-0 md:size-[50px] lg:size-[70px]" />
        <div class="flex flex-col">
            <div class="text-[12px] text-[#718ebf] md:text-[16px]">{{ title }}</div>
            <div class="text-dark text-[16px] font-medium md:text-[18px] xl:text-[20px]">{{ descr }}</div>
        </div>
    </div>
</template>
