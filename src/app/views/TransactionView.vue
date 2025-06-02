<script setup lang="ts">
import { TransactionExpense } from '@/modules/TransactionsExpense'
import { TransactionMyCards } from '@/modules/TransactionsMyCards'
import { TransactionRecent } from '@/modules/TransactionsRecent'
</script>

<template>
    <div class="mb-6 grid grid-cols-1 gap-6 lg:mb-8 xl:grid-cols-[1.3fr_1fr]">
        <TransactionMyCards />
        <TransactionExpense />
    </div>
    <TransactionRecent />
</template>
