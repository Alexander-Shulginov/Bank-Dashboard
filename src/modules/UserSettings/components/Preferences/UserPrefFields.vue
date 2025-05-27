<script setup lang="ts">
import BaseInput from '@/shared/components/ui/BaseInput.vue'
</script>

<template>
    <div class="mb-5.5 flex w-full flex-col gap-4 md:mb-7 md:flex-row md:gap-7.5">
        <BaseInput id="currency" label="Currency" placeholder="ENG" type="text" error-text="Choice currency" />
        <BaseInput id="time-zone" label="Time Zone" placeholder="(GMT-12:00)" type="text" error-text="Choice time zone" />
    </div>
</template>
