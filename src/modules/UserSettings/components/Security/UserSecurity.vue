<script setup lang="ts">
import UserSecurityAuth from './UserSecurityAuth.vue'
import UserSecurityPassword from './UserSecurityPassword.vue'
import BaseButton from '@/shared/components/ui/BaseButton.vue'
</script>

<template>
    <div>
        <UserSecurityAuth />
        <UserSecurityPassword />
        <BaseButton type="submit" text="Save" class="ml-auto" />
    </div>
</template>
