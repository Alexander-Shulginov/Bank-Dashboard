<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '../SvgIcon.vue'

interface InputProps {
    id: string
    label: string
    placeholder: string
    type: string
    errorText: string
    isDisabled?: false
}

defineProps<InputProps>()

const inputValue = ref('')

const clearInput = () => {
    inputValue.value = ''
}
</script>

<template>
    <div class="w-full">
        <label :for="id" class="text-dark text-md mb-2 block">{{ label }}</label>
        <div class="relative">
            <input
                v-model="inputValue"
                :id="id"
                :type="type"
                :placeholder="placeholder"
                :disabled="isDisabled"
                class="text-dark placeholder-board w-full rounded-[10px] border-1 border-[#77aace] px-4 py-3 text-sm group-[.is-error]:border-red-400 sm:rounded-[15px] sm:px-5 sm:py-4"
            />
            <transition name="fade">
                <button v-show="inputValue" @click="clearInput" type="button" aria-label="Clear this input">
                    <SvgIcon name="shared-assets-icons-close" class="absolute top-[50%] right-3 size-[20px] translate-y-[-50%] cursor-pointer" />
                </button>
            </transition>
            <div class="hidden text-sm text-red-400 group-[.is-error]:block">{{ errorText }}</div>
        </div>
    </div>
</template>
