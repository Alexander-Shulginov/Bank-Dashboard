<script setup lang="ts">
import BaseInput from '@/shared/components/ui/BaseInput.vue'
import BaseButton from '@/shared/components/ui/BaseButton.vue'
</script>

<template>
    <div class="grow-2">
        <div class="mb-8.5 grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-8.5 lg:gap-y-5.5">
            <BaseInput v-for="i in 10" :key="i" type="text" id="123" label="Your Name" placeholder="Charlene Reed" error-text="Enter your name" />
        </div>
        <BaseButton type="button" text="Save" class="ml-auto" />
    </div>
</template>
