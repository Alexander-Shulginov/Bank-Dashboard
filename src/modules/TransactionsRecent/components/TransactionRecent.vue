<script setup lang="ts">
import { ref } from 'vue'
import TransactionRecentTable from '@modules/TransactionsRecent/components/TransactionRecentTable.vue'
import BaseTitle from '@/shared/components/BaseTitle.vue'

const activeTab = ref<string>('all')

const tabs = [
    { id: 'all', name: 'All Transactions' },
    { id: 'income', name: 'Income' },
    { id: 'expense', name: 'Expense' },
]
</script>

<template>
    <div>
        <BaseTitle text="Recent Transactions"/>
        <nav class="flex gap-x-8">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                type="button"
                @click="activeTab = tab.id"
                :class="[
                    'mb-4 cursor-pointer border-b-3 px-1 pb-4 text-[14px] font-medium text-nowrap sm:mb-6 sm:text-[16px]',
                    activeTab === tab.id ? 'border-accent text-accent' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                ]"
            >
                {{ tab.name }}
            </button>
        </nav>
        <TransactionRecentTable :active-tab="activeTab" />
    </div>
</template>
