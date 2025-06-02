<script setup lang="ts">
import { AccountLastTransaction } from '@/modules/AccountLastTransaction'
import { AccountMyCard } from '@/modules/AccountMyCard'
import { AccountFeatures } from '@modules/AccountFeatures/index'
</script>

<template>
    <AccountFeatures />
    <div class="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        <AccountLastTransaction />
        <AccountMyCard />
    </div>
</template>
