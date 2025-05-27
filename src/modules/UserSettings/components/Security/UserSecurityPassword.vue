<script setup lang="ts">
import BaseInput from '@/shared/components/ui/BaseInput.vue'
</script>

<template>
    <div class="mb-5 flex flex-col gap-4 md:mb-7 max-w-[360px]">
        <BaseInput id="current-pas" label="Current Password" placeholder="********" type="password" error-text="Choice current-pas" />
        <BaseInput id="new-pas" label="New Password" placeholder="********" type="password" error-text="Choice new-pas" />
    </div>
</template>
