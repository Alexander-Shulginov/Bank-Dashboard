<script setup lang="ts">
import SvgIcon from '@/shared/components/SvgIcon.vue'
import { formatCardNumber } from '@/shared/helpers/formatCardNumber'

interface Card {
    id?: number
    balance?: number
    holder?: string
    expire?: string
    currency?: string
}

const { balance = 12.566, holder = 'Eddy Cusuma', expire = '12/21', id = 4241556812358614, currency = '$' } = defineProps<Card>()
</script>

<template>
    <div style="background: linear-gradient(136deg, #4c49ed 0%, #0a06f4 100%)" class="font-second grow-2 rounded-[15px] p-4 md:rounded-[20px] md:p-5 lg:rounded-[25px] lg:p-6">
        <div class="mb-10 flex items-center justify-between">
            <div class="text-white">
                <div class="text-[12px]">Balance</div>
                <div class="text-md font-semibold lg:text-xl">{{ currency }}{{ balance }}</div>
            </div>
            <!-- <SvgIcon name="card-chip" class="size-[30px] lg:size-[34px]" /> -->
        </div>

        <div class="mb-10 flex gap-15 text-white">
            <div>
                <div class="uppercase opacity-70">Card Holder</div>
                <div>{{ holder }}</div>
            </div>
            <div>
                <div class="uppercase opacity-70">Valid thru</div>
                <div>{{ expire }}</div>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <div class="text-md font-semibold text-white lg:text-[22px]">{{ formatCardNumber(id) }}</div>
            <SvgIcon name="modules-MyCards-assets-icons-visa" class="h-[18px] w-[28px] lg:h-[30px] lg:w-[44px]" />
        </div>
    </div>
</template>
