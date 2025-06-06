import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/app/views/HomeView.vue'
import { nextTick } from 'vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/transactions',
            name: 'Transactions',
            component: () => import('@/app/views/TransactionView.vue'),
        },
        {
            path: '/accounts',
            name: 'Accounts',
            component: () => import('@/app/views/AccountsView.vue'),
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

    scrollBehavior() {
        return { top: 0 }
    },
})

const defaultTitle = 'BankBoard'

router.afterEach((to) => {
    nextTick(() => {
        document.title = `${defaultTitle} | ${String(to.name)}`
    })
})

export default router
