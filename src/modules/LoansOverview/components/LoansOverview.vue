<script setup lang="ts">
import loans from '@modules/LoansOverview/mock/data.json'
import { computed } from 'vue'
import BaseTitle from '@/shared/components/BaseTitle.vue'

const calcLoanMoney = computed(() => {
    const total = loans.reduce((sum, item) => sum + item.loan_money, 0)

    return total.toLocaleString('en-US')
})

const calcReplayMoney = computed(() => {
    const total = loans.reduce((sum, item) => sum + item.left_to_repay, 0)
    return total.toLocaleString('en-US')
})
</script>

<template>
    <BaseTitle text="Active Loans Overview" />
    <div class="radius-base scrollable overflow-x-scroll bg-white p-6 lg:overflow-hidden">
        <table v-if="loans" class="w-[700px] overflow-x-scroll text-left md:w-[900px] lg:w-full">
            <thead class="border-b-14 border-transparent">
                <tr class="text-board text-center text-[12px] font-medium md:text-[16px]">
                    <th>SL No</th>
                    <th>Loan Money</th>
                    <th>Left to Repay</th>
                    <th>Duration</th>
                    <th>Interest Rate</th>
                    <th>Replay</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="loan in loans" :key="loan.sl_no" class="text-dark text-center border-b-1 border-b-[#f2f4f7] text-[12px] md:text-[16px]">
                    <td class="py-4">{{ loan.sl_no }}</td>
                    <td>${{ loan.loan_money.toLocaleString() }}</td>
                    <td>${{ loan.left_to_repay.toLocaleString() }}</td>
                    <td>{{ loan.duration_months }} Months</td>
                    <td>{{ loan.interest_rate * 100 }}%</td>
                    <td>
                        <button
                            type="button"
                            class="hover:text-accent hover:border-accent shrink-0 cursor-pointer justify-self-end rounded-full border-[#718ebf] text-xs font-medium text-[#718ebf] transition-colors md:border-1 md:px-8 md:py-2 md:text-[16px]"
                        >
                            Replay
                        </button>
                    </td>
                </tr>
                <tr class="text-[#fe5c73] text-center">
                    <td class="pt-3">Total</td>
                    <td class="pt-3">${{ calcLoanMoney }}</td>
                    <td class="pt-3">${{ calcReplayMoney }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else class="text-center">No data</div>
    </div>
</template>
