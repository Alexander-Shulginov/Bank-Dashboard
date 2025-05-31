<script setup lang="ts">
import { InvestmentsFeatures } from '@/modules/InvestmentsFeatures/index'
import { InvestmentsMonthly } from '@/modules/InvestmentsMonthly/index'
import { InvestmentsTrending } from '@/modules/InvestmentsTrending'
import { InvestmentsYears } from '@/modules/InvestmentsYears'
import { InvestmentsMy } from '@/modules/InvestmentsMy'
</script>

<template>
    <section aria-label="Investments">
        <InvestmentsFeatures />
        <div class="mb-6 flex flex-col items-start gap-5 lg:mb-10 xl:flex-row">
            <InvestmentsYears />
            <InvestmentsMonthly />
        </div>
        <div class="grid grid-cols-1 gap-8 xl:grid-cols-[2fr_1.5fr]">
            <InvestmentsMy />
            <InvestmentsTrending />
        </div>
    </section>
</template>
