import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/app/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/transaction',
            name: 'Transaction',
            component: () => import('@/app/views/TransactionView.vue'),
        },
        {
            path: '/accounts',
            name: 'Accounts',
            component: () => import('@/app/views/AccountsView.vue'),
        },
        {
            path: '/investments',
            name: 'Investments',
            component: () => import('@/app/views/InvestmentsView.vue'),
        },
        {
            path: '/credit-cards',
            name: 'Credit cards',
            component: () => import('@/app/views/CreditCardsView.vue'),
        },
        {
            path: '/loans',
            name: 'Loans',
            component: () => import('@/app/views/LoansView.vue'),
        },
        {
            path: '/services',
            name: 'Services',
            component: () => import('@/app/views/ServicesView.vue'),
        },
        {
            path: '/settings',
            name: 'Settings',
            component: () => import('@/app/views/SettingView.vue'),
        },
    ],
})

export default router
