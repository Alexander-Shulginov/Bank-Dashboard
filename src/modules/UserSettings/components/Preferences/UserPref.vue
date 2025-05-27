<script setup lang="ts">
import BaseButton from '@/shared/components/ui/BaseButton.vue'
import UserPrefNotification from './UserPrefNotification.vue'
import UserPrefFields from './UserPrefFields.vue'
</script>

<template>
    <form @submit.prevent>
        <UserPrefFields />
        <UserPrefNotification />
        <BaseButton type="submit" text="Save" class="ml-auto" />
    </form>
</template>
