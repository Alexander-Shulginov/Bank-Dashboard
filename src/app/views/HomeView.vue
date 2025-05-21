<script setup lang="ts">
import { MyCards } from '@/modules/MyCards'
import { RecentTransaction } from '@/modules/RecentTransaction'
import WeeklyActivity from '@/modules/WeeklyActivity/components/WeeklyActivity.vue'
</script>

<template>
    <div class="flex gap-6 mb-10">
        <MyCards />
        <RecentTransaction />
    </div>
    <WeeklyActivity />
</template>
