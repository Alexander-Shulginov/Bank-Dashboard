<script setup lang="ts">
import { AccountInvoices } from '@/modules/AccountInvoices'
import { AccountLastTransaction } from '@/modules/AccountLastTransaction'
import { AccountMyCard } from '@/modules/AccountMyCard'
import { AccountOverview } from '@/modules/AccountOverview'
import { AccountFeatures } from '@modules/AccountFeatures'
</script>

<template>
    <AccountFeatures />
    <div class="grid grid-cols-1 mb-5 lg:mb-10 gap-6 xl:grid-cols-[1fr_360px]">
        <AccountLastTransaction />
        <AccountMyCard />
    </div>
    <div class="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_350px]">
        <AccountOverview />
        <AccountInvoices />
    </div>
</template>
