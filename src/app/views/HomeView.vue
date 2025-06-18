<script setup lang="ts">
import { InvestmentsMonthly } from '@/modules/InvestmentsMonthly/index'
import { InvestmentsTrending } from '@/modules/InvestmentsTrending'
import { InvestmentsYears } from '@/modules/InvestmentsYears'
import { InvestmentsMy } from '@/modules/InvestmentsMy'
</script>

<template>
    <section aria-label="Investments">
        <div class="mb-6 grid grid-cols-1 gap-8 lg:mb-10 xl:grid-cols-[2fr_1.5fr]">
            <InvestmentsMy />
            <InvestmentsTrending />
        </div>
        <div class="flex flex-col items-start gap-5 xl:flex-row">
            <InvestmentsYears />
            <InvestmentsMonthly />
        </div>
    </section>
</template>
