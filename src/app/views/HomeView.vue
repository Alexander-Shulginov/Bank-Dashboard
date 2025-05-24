<script setup lang="ts">
import BalanceHistory from '@/modules/BalanceHistory/components/BalanceHistory.vue';
import ExpenseStatistics from '@/modules/ExpenseStatistics/components/ExpenseStatistics.vue';
import { MyCards } from '@/modules/MyCards'
import { RecentTransaction } from '@/modules/RecentTransaction'
import WeeklyActivity from '@/modules/WeeklyActivity/components/WeeklyActivity.vue'
</script>

<template>
    <div class="flex gap-6 mb-10">
        <!-- <MyCards /> -->
        <!-- <RecentTransaction /> -->
    </div>
    <ExpenseStatistics />
    <!-- <WeeklyActivity /> -->
    <!-- <BalanceHistory /> -->

</template>
