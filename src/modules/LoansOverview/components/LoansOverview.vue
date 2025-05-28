<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import LoansFeatures from './LoansOverviewFeatures.vue'
import LoansOverviewTable from './LoansOverviewTable.vue';
</script>

<template>
    <section aria-label="Loans">
        <LoansFeatures />
        <BaseTitle text="Active Loans Overview" />
        <LoansOverviewTable />
    </section>
</template>
