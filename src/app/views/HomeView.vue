<script setup lang="ts">
import BalanceHistory from '@/modules/BalanceHistory/components/BalanceHistory.vue'
import ExpenseStatistics from '@/modules/ExpenseStatistics/components/ExpenseStatistics.vue'
import { MyCards } from '@/modules/MyCards'
import { RecentTransaction } from '@/modules/RecentTransaction'
import WeeklyActivity from '@/modules/WeeklyActivity/components/WeeklyActivity.vue'
</script>

<template>
    <div class="mb-10 flex gap-6">
        <!-- <MyCards /> -->
        <!-- <RecentTransaction /> -->
    </div>
    <div class="mb-20 grid grid-cols-[2fr_1fr] gap-6">
        <!-- <WeeklyActivity /> -->
        <!-- <ExpenseStatistics /> -->
    </div>
    <!-- <BalanceHistory /> -->
</template>
