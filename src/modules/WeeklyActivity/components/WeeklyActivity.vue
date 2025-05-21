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
                labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                datasets: [
                    {
                        label: 'Deposit      ',
                        data: [240, 130, 250, 370, 230, 240, 330],
                        backgroundColor: '#17e0cf',
                        borderRadius: 10,
                        barPercentage: 0.7,
                        borderSkipped: false,
                        categoryPercentage: 0.5,
                    },
                    {
                        label: 'Withdraw',
                        data: [470, 340, 320, 470, 130, 380, 390],
                        backgroundColor: 'blue',
                        borderRadius: 10,
                        borderSkipped: false,
                        barPercentage: 0.7,
                        categoryPercentage: 0.5,
                    },
                ],
            },
            options: {
                responsive: true,

                scales: {
                    y: {
                        beginAtZero: true,

                        ticks: {
                            color: '#718ebf',
                            stepSize: 100,
                            autoSkip: false,
                            padding: 10,
                            font: {
                                family: 'Inter',
                                size: 13,
                            },
                        },
                        grid: {
                            color: '#e2e8f0',
                            drawTicks: false,
                        },
                        border: {
                            display: false,
                        },
                    },
                    x: {
                        ticks: {
                            color: '#718ebf',
                            padding: 10,
                            autoSkip: false,
                            font: {
                                family: 'Inter',
                                size: 13,
                            },
                        },
                        grid: {
                            display: false,
                        },
                    },
                },
                plugins: {
                    legend: {
                        align: 'end',
                        fullSize: false,

                        labels: {
                            color: '#718ebf',
                            usePointStyle: true,
                            boxWidth: 15,
                            boxHeight: 15,
                            font: {
                                size: 15,
                            },
                        },
                    },
                    tooltip: {
                        backgroundColor: '#ffffff',
                        titleColor: '#000000',
                        bodyColor: '#000000',
                        borderColor: '#e2e8f0',
                        borderWidth: 1,
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
    <div>
        <BaseTitle text="Weekly Activity" />
        <div class="size-full rounded-[15px] bg-white p-2 md:rounded-[25px] md:p-6">
            <canvas ref="chartRef" class="weekly-chart"></canvas>
        </div>
    </div>
</template>

<style>
.weekly-chart {
    width: 100% !important;
    max-height: 600px !important;
    height: 100% !important;
}
</style>
