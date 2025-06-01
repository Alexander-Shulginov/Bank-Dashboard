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
            type: 'doughnut',
            data: {
                labels: ['DBL Bank', 'BRC Bank', 'ABM Bank', 'MCP Bank'],
                datasets: [
                    {
                        data: [15, 35, 45, 25], // Равные доли, измените по необходимости
                        backgroundColor: [
                            '#4F46E5', // Синий для DBL Bank
                            '#EC4899', // Розовый для BRC Bank
                            '#10B981', // Бирюзовый для ABM Bank
                            '#F59E0B', // Оранжевый для MCP Bank
                        ],
                        borderWidth: 0,
                        cutout: '50%', // Размер внутреннего отверстия
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 20,
                            font: {
                                size: 14,
                                family: 'Arial, sans-serif',
                            },
                            color: '#9CA3AF',
                            generateLabels: function (chart) {
                                const data = chart.data
                                if (data.labels?.length && data.datasets.length) {
                                    return data.labels.map((label, i) => {
                                        const backgroundColor = data.datasets[0].backgroundColor[i]
                                        return {
                                            text: label,
                                            fillStyle: backgroundColor,
                                            strokeStyle: backgroundColor,
                                            pointStyle: 'circle',
                                            hidden: false,
                                            index: i,
                                        }
                                    })
                                }
                                return []
                            },
                        },
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
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
    <div class="grow-0">
        <BaseTitle text="Card Expense Statistics" />
        <div class="w-full">
            <div class="flex size-full rounded-[15px] bg-white p-2 md:rounded-[25px] md:p-6">
                <canvas ref="chartRef" class="weekly-chart"></canvas>
            </div>
        </div>
    </div>
</template>

<style>
.weekly-chart {
    width: 100% !important;
    height: 100% !important;
    /* max-height: 310px; */
}
</style>
