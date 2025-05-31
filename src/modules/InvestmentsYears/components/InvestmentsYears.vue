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
            type: 'line',
            data: {
                labels: [2020, 2021, 2022, 2023, 2024, 2025],
                datasets: [
                    {
                        label: 'Value',
                        data: [6000, 23000, 15000, 36000, 20000, 28000],
                        borderColor: '#ff9500',
                        backgroundColor: '#ff9500',
                        pointBackgroundColor: '#ff9500',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        borderWidth: 3,
                        fill: false,
                        tension: 0,
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
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: '#718ebf',
                            font: {
                                size: 12,
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        max: 40000,
                        grid: {
                            color: '#f3f4f6',
                        },
                        ticks: {
                            color: '#718ebf',
                            font: {
                                size: 12,
                            },
                            stepSize: 10000,
                            callback: function (value) {
                                if (value === 0) {
                                    return '0'
                                } else {
                                    return '$' + Number(value) / 1000 + ',000'
                                }
                            },
                        },
                        border: {
                            display: false,
                        },
                    },
                },
                elements: {
                    line: {
                        tension: 0,
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
        <BaseTitle text="Yearly Total Investment" />
        <div class="flex size-full rounded-[15px] bg-white p-2 md:rounded-[25px] md:p-6">
            <canvas ref="chartRef" class="weekly-chart"></canvas>
        </div>
    </div>
</template>

<style>
.weekly-chart {
    width: 100% !important;
    height: 100% !important;
}
</style>
