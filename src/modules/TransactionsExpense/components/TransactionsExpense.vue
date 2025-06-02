<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'
import BaseTitle from '@/shared/components/BaseTitle.vue'

const chartRef = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

onMounted(() => {
    if (chartRef.value) {
        const ctx = chartRef.value.getContext('2d')
        if (!ctx) return

        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
                datasets: [
                    {
                        data: [8000, 11000, 7500, 6000, 12500, 9000],
                        backgroundColor: ['#10B981', '#E5E7EB'],
                        borderRadius: 8,
                        borderSkipped: false,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return '$' + context.parsed.y.toLocaleString()
                            },
                        },
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                    },
                },
            },
        })
    }
})

onBeforeUnmount(() => {
    if (chartInstance) {
        chartInstance.destroy()
        chartInstance = null
    }
})
</script>

<template>
    <div class="w-full">
        <BaseTitle text="My Expense" />
        <div class="flex rounded-[15px] bg-white p-2 md:rounded-[25px] md:p-6">
            <canvas ref="chartRef" class="weekly-chart"></canvas>
        </div>
    </div>
</template>

<style>
.weekly-chart {
    width: 100% !important;
    height: 100% !important;
    /* max-height: 400px; */
}
</style>
