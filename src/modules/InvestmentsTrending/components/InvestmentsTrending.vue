<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'

import data from '@/modules/InvestmentsTrending/mock/data.json'

const getReturnColor = (value: number) => {
    return value >= 0 ? 'text-green-500' : 'text-red-500'
}
const formatReturn = (value: number) => {
    return value >= 0 ? `+${value}%` : `${value}%`
}
</script>

<template>
    <div class="grow-2">
        <BaseTitle text="Trending Stock" />
        <div v-if="data" class="scrollable radius-base w-full overflow-x-auto rounded-lg bg-white">
            <table class="w-full">
                <thead class="border-board border-b">
                    <tr>
                        <th class="text-board px-6 py-4 text-left font-medium tracking-wider text-nowrap">SL No</th>
                        <th class="text-board px-6 py-4 text-left font-medium tracking-wider">Name</th>
                        <th class="text-board px-6 py-4 text-left font-medium tracking-wider">Price</th>
                        <th class="text-board px-6 py-4 text-left font-medium tracking-wider">Return</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stock in data" :key="stock.id" class="transition-colors hover:bg-gray-50">
                        <td class="text-dark px-6 py-3 whitespace-nowrap">{{ String(stock.id).padStart(2, '0') }}.</td>
                        <td class="text-dark px-6 py-3 whitespace-nowrap">
                            {{ stock.name }}
                        </td>
                        <td class="text-dark px-6 py-3 whitespace-nowrap">${{ stock.price }}</td>
                        <td class="px-6 py-3 whitespace-nowrap" :class="getReturnColor(stock.return)">
                            {{ formatReturn(stock.return) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>No data</div>
    </div>
</template>
