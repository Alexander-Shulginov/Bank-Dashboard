<script setup lang="ts">
import BaseCheckbox from '@/shared/components/ui/BaseCheckbox.vue'
</script>

<template>
    <div class="mb-8 flex flex-col gap-4 md:mb-16">
        <div class="text-[17px]">Notification</div>
        <label for="receive" class="flex items-center gap-3">
            <BaseCheckbox checked id="receive" name="user-receive" />
            <span>I send or receive digital currency</span>
        </label>
        <label for="order" class="flex items-center gap-3">
            <BaseCheckbox id="order" name="user-order" />
            <span>I receive merchant order</span>
        </label>
        <label for="recom" class="flex items-center gap-3">
            <BaseCheckbox checked id="recom" name="user-recom" />
            <span>There are recommendation for my account</span>
        </label>
    </div>
</template>
