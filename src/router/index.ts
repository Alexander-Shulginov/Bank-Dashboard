import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

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
            component: () => import('@/views/TransactionView.vue'),
        },
        {
            path: '/accounts',
            name: 'Accounts',
            component: () => import('@/views/AccountsView.vue'),
        },
        {
            path: '/investments',
            name: 'Investments',
            component: () => import('@/views/InvestmentsView.vue'),
        },
        {
            path: '/credit-cards',
            name: 'Credit cards',
            component: () => import('@/views/CreditCardsView.vue'),
        },
        {
            path: '/loans',
            name: 'Loans',
            component: () => import('@/views/LoansView.vue'),
        },
        {
            path: '/services',
            name: 'Services',
            component: () => import('@/views/ServicesView.vue'),
        },
        {
            path: '/my-privileges',
            name: 'My privileges',
            component: () => import('@/views/MyPrivilegesView.vue'),
        },
        {
            path: '/settings',
            name: 'Settings',
            component: () => import('@/views/SettingView.vue'),
        },
    ],
})

export default router
