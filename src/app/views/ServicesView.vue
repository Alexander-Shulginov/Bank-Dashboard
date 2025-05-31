<script setup lang="ts">
import { BankServicesFeatures } from '@/modules/BankServicesFeatures/index'
import { BankServicesList } from '@/modules/BankServicesList/index'
</script>

<template>
    <section aria-label="Services">
        <BankServicesFeatures />
        <BankServicesList />
    </section>
</template>
