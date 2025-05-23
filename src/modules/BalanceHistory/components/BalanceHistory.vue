<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'

const BalanceChart = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

function createGradient(context) {
    const chart = context.chart
    const { ctx, chartArea } = chart

    if (!chartArea) return

    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
    gradient.addColorStop(0, 'rgba(0, 0, 255, 0.2)')
    gradient.addColorStop(1, 'rgba(0, 0, 255, 0.05)')

    return gradient
}
onMounted(() => {
    if (BalanceChart.value) {
        const ctx = BalanceChart.value.getContext('2d')
        if (!ctx) return

        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
                datasets: [
                    {
                        label: 'Dataset',
                        data: [150, 320, 270, 480, 780, 200, 570, 180, 630],
                        fill: true,
                        backgroundColor: createGradient,
                        borderColor: 'blue',
                        borderWidth: 3,
                        tension: 0.4,
                        pointRadius: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    x: {
                        grid: {
                            drawOnChartArea: true,
                        },
                        ticks: {
                            color: '#6B7280',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        max: 800,
                        grid: {
                            color: '#E5E7EB',
                        },
                        ticks: {
                            stepSize: 200,
                            color: '#6B7280',
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
        <canvas id="myChart" ref="BalanceChart"></canvas>
    </div>
</template>

<style scoped>
#myChart {
    max-height: 100% !important;
    width: 100% !important;
    /* aspect-ratio: 16 / 9 !important; */
}
</style>
