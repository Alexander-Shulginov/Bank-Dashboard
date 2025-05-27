<script setup lang="ts">
import BaseCheckbox from '@/shared/components/ui/BaseCheckbox.vue'
</script>

<template>
    <div class="mb-5 md:mb-7">
        <div class="text-[17px] mb-4">Two-factor Authentication</div>
        <label for="auth" class="flex items-center gap-3">
            <BaseCheckbox checked id="auth" name="user-auth" />
            <span>Enable or disable two factor authentication</span>
        </label>
    </div>
</template>

