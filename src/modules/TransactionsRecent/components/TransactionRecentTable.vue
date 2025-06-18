<script setup lang="ts">
import { computed } from 'vue'
import data from '@modules/TransactionsRecent/mock/data.json'

const props = defineProps<{
    activeTab: string
}>()

const filteredTransactions = computed(() => {
    if (props.activeTab === 'income') {
        return data.filter((t) => t.amount > 0)
    } else if (props.activeTab === 'expense') {
        return data.filter((t) => t.amount < 0)
    }
    return data
})

const getTypeClass = (type: string): string => {
    switch (type) {
        case 'Shopping':
            return 'bg-purple-100 text-purple-800'
        case 'Transfer':
            return 'bg-blue-100 text-blue-800'
        case 'Service':
            return 'bg-yellow-100 text-yellow-800'
        default:
            return 'bg-gray-100 text-gray-800'
    }
}
</script>

<template>
    <div class="scrollable radius-base overflow-x-auto bg-white py-2">
        <table class="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th class="text-board px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Description</th>
                    <th class="text-board px-6 py-3 text-left text-xs font-medium tracking-wider text-nowrap uppercase">Transaction ID</th>
                    <th class="text-board px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Type</th>
                    <th class="text-board px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Card</th>
                    <th class="text-board px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Date</th>
                    <th class="text-board px-6 py-3 text-left text-xs font-medium tracking-wider uppercase">Amount</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="transaction in filteredTransactions" :key="transaction.id" class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="h-8 w-8 flex-shrink-0">
                                <div :class="['flex h-8 w-8 items-center justify-center rounded-full', transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100']">
                                    <svg :class="['h-4 w-4', transaction.amount > 0 ? 'text-green-600' : 'text-red-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="transaction.amount > 0 ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'" />
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                    {{ transaction.description }}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                        {{ transaction.transactionId }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span :class="['inline-flex rounded-full px-2 py-1 text-xs font-semibold', getTypeClass(transaction.type)]">
                            {{ transaction.type }}
                        </span>
                    </td>
                    <td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                        {{ transaction.card }}
                    </td>
                    <td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                        {{ transaction.date }}
                    </td>
                    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                        <span :class="[transaction.amount > 0 ? 'text-green-600' : 'text-red-600']"> {{ transaction.amount > 0 ? '+' : '-' }}${{ Math.abs(transaction.amount).toLocaleString() }} </span>
                    </td>
                    <td class="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                        <button
                            type="button"
                            class="hover:text-accent hover:border-accent shrink-0 cursor-pointer justify-self-end rounded-full border-[#718ebf] text-xs font-medium text-[#718ebf] transition-colors md:border-1 md:px-8 md:py-2 md:text-[16px]"
                        >
                            Download
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
