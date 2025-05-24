<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Chart, { type TooltipItem } from 'chart.js/auto'
import BaseTitle from '@/shared/components/BaseTitle.vue'

const expenseChart = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

const chartData = [
    {
        label: 'Entertainment',
        value: 30,
        percentage: 30,
        color: '#4a5568',
    },
    {
        label: 'Bill Expense',
        value: 15,
        percentage: 15,
        color: '#ff6b35',
    },
    {
        label: 'Others',
        value: 35,
        percentage: 35,
        color: '#2563eb',
    },
    {
        label: 'Investment',
        value: 20,
        percentage: 20,
        color: '#e91e63',
    },
]

onMounted(() => {
    if (expenseChart.value) {
        const ctx = expenseChart.value.getContext('2d')
        if (!ctx) return

        chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: chartData.map((item) => item.label),
                datasets: [
                    {
                        data: chartData.map((item) => item.value),
                        backgroundColor: chartData.map((item) => item.color),
                        borderWidth: 8,
                        borderColor: '#ffffff',
                        hoverBorderWidth: 10,
                        hoverBorderColor: '#ffffff',
                    },
                ],
            },
            options: {
                cutout: 0,
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: true,
                        callbacks: {
                            label: function (context: TooltipItem<'doughnut'>) {
                                const label = context.label || ''
                                const value = context.parsed || 0
                                return `${label}: ${value}%`
                            },
                        },
                    },
                },
                elements: {
                    arc: {
                        borderJoinStyle: 'round',
                    },
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 1500,
                    easing: 'easeOutQuart',
                },
                interaction: {
                    intersect: false,
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
    <BaseTitle text="Expense Distribution" />
    <div class="radius-base bg-white">
        <div>
            <canvas id="expenseChart" ref="expenseChart"></canvas>
        </div>
        <div v-for="(item, index) in chartData" :key="index">
            <div :style="{ backgroundColor: item.color }"></div>
            <span>{{ item.label }} - {{ item.percentage }}%</span>
        </div>
    </div>
</template>

<style scoped>
#expenseChart {
    height: 100% !important;
    max-height: 600px !important;
    width: 100% !important;
}
</style>
