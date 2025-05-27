<script setup lang="ts">
import BaseTitle from '@/shared/components/BaseTitle.vue'
import BankServicesInfo from './BankServicesInfo.vue'
import BankServicesFeatures from './BankServicesFeatures.vue'
</script>

<template>
    <section aria-label="Services">
        <BankServicesFeatures />
        <BaseTitle text="Bank Services List" />
        <BankServicesInfo />
    </section>
</template>
