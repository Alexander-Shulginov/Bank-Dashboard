<script setup lang="ts">
import BaseInput from '@/shared/components/ui/BaseInput.vue'
import BaseButton from '@/shared/components/ui/BaseButton.vue'
import data from './mock.json'
</script>

<template>
    <div class="grow-2">
        <form action="#" id="edit-profile" @submit.prevent name="edit-profile" class="mb-8.5 grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-8.5 lg:gap-y-5.5">
            <BaseInput v-for="item in data" :key="item.label" :type="item.type" :id="item.label" :label="item.label" :placeholder="item.placeholder" :error-text="item.errorText" />
        </form>
        <BaseButton type="submit" text="Save" form="edit-profile" class="ml-auto" />
    </div>
</template>
