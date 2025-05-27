<script setup lang="ts">
interface CheckboxProps {
    id: string
    name: string
    checked?: boolean
}

defineProps<CheckboxProps>()
</script>

<template>
    <div class="relative flex cursor-pointer">
        <input type="checkbox" class="peer h-[30px] w-[56px] cursor-pointer appearance-none rounded-[15px] bg-[#dfeaf2] transition-colors checked:bg-[#16dbcc]" :name="name" :checked="checked" :id="id" />
        <div class="absolute top-[50%] right-1 size-[23px] translate-y-[-50%] rounded-full bg-white transition-transform peer-checked:translate-x-[-105%]"></div>
    </div>
</template>
