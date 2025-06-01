<script setup lang="ts">
import { CreditCardsAddNew } from '@/modules/CreditCardsAddNew'
import { CreditCardsList } from '@/modules/CreditCardsList'
import { CreditCardsSettings } from '@/modules/CreditCardsSettings'
import { CreditCardsStatistics } from '@/modules/CreditCardsStatistics'
</script>

<template>
    <div class="mb-10 flex flex-col gap-6 xl:flex-row">
        <CreditCardsStatistics />
        <CreditCardsList />
    </div>
    <div class="mb-10 flex flex-col gap-6 xl:flex-row">
        <CreditCardsAddNew />
        <CreditCardsSettings />
    </div>
</template>
