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
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [
                    {
                        label: 'Value',
                        data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 40000) + 1),
                        borderColor: '#00d4aa',
                        backgroundColor: '#00d4aa',
                        pointBackgroundColor: '#00d4aa',
                        pointBorderColor: '#00d4aa',
                        pointBorderWidth: 0,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        borderWidth: 4,
                        fill: false,
                        tension: 0.4,
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
                        border: {
                            display: false,
                        },
                        ticks: {
                            color: '#718ebf',
                            font: {
                                size: 14,
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        max: 40000,
                        border: {
                            display: false,
                        },

                        ticks: {
                            color: '#718ebf',
                            font: {
                                size: 14,
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
                    },
                },
                elements: {
                    line: {
                        tension: 0.4,
                    },
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
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
        <BaseTitle text="Monthly Revenue" />
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
