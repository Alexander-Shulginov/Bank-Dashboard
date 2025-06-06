<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'
import BaseTitle from '@/shared/components/BaseTitle.vue'

const chartRef = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null
const chartData = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
        {
            label: 'Debit',
            data: [800, 600, 500, 1800, 900, 1000, 960],
            backgroundColor: '#3366FF',
            borderRadius: 8,
            borderSkipped: false,
        },
        {
            label: 'Credit',
            data: [1200, 850, 700, 650, 1100, 450, 1420],
            backgroundColor: '#FF9500',
            borderRadius: 8,
            borderSkipped: false,
        },
    ],
}

onMounted(() => {
    if (chartRef.value) {
        const ctx = chartRef.value.getContext('2d')
        if (!ctx) return

        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,

                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: '#999',
                            font: {
                                size: 14,
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f0f0f0',
                            lineWidth: 1,
                        },
                        ticks: {
                            color: '#999',
                            font: {
                                size: 12,
                            },

                            callback: function (value) {
                                return '$' + value.toLocaleString()
                            },
                        },
                    },
                },

                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: 'white',
                        bodyColor: 'white',
                        cornerRadius: 8,
                        callbacks: {
                            label: function (context) {
                                return context.dataset.label + ': $' + context.parsed.y.toLocaleString()
                            },
                        },
                    },
                },

                animation: {
                    duration: 1000,
                    easing: 'easeOutQuart',
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
        <BaseTitle text="Debit & Credit Overview" />
        <div class="flex rounded-[15px] bg-white p-2 md:rounded-[25px] md:p-6">
            <canvas ref="chartRef" class="overview-chart"></canvas>
        </div>
    </div>
</template>

<style>
.overview-chart {
    width: 100% !important;
    height: 100% !important;

    height: 290px !important;
}

@media (max-width: 768px) {
    .overview-chart {
        height: 100% !important;
    }
}
</style>
