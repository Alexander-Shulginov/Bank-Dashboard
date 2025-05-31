<script setup lang="ts">
import BankServicesFeatures from '@/modules/BankServicesFeatures/components/BankServicesFeatures.vue'
import { BankServicesList } from '@/modules/BankServicesList'
</script>

<template>
    <section aria-label="Services">
        <BankServicesFeatures />
        <BankServicesList />
    </section>
</template>
