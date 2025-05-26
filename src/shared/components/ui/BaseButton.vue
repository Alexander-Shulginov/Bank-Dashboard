<script setup lang="ts">
interface ButtonProps {
    text: string
    type: 'button' | 'submit' | 'reset'
    isDisabled?: false
}

defineProps<ButtonProps>()
</script>

<template>
    <button :type="type" :disabled="isDisabled" class="bg-accent hover:bg-accent/90 w-full block cursor-pointer rounded-[9px] p-3 text-[15px] font-medium text-white transition-colors md:w-auto md:rounded-[15px] md:px-18 md:text-[18px]">{{ text }}</button>
</template>
