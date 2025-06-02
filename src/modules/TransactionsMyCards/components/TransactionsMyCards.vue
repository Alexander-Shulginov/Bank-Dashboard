<script setup lang="ts">
import BankCard from '@/modules/MyCards/components/BankCard.vue'
import BaseTitle from '@/shared/components/BaseTitle.vue'
</script>

<template>
    <div>
        <BaseTitle text="My Cards" />
        <div class="flex gap-6 flex-col md:flex-row">
            <BankCard />
            <BankCard />
        </div>
    </div>
</template>
