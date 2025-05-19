<script setup lang="ts">
import SvgIcon from '@/shared/components/SvgIcon.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const notifyIsVisible = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleNotify = () => {
    notifyIsVisible.value = !notifyIsVisible.value
}

const handleClickOutside = (event: MouseEvent) => {
    if (!notifyIsVisible.value) return
    const target = event.target as Node
    if (dropdownRef.value && !dropdownRef.value.contains(target)) {
        notifyIsVisible.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div class="relative max-[380px]:static" ref="dropdownRef">
        <button @click="toggleNotify" type="button" class="bg-light group cursor-pointer rounded-full p-2">
            <SvgIcon name="notify" fill="#FE5C73" class="ring-on-hover size-[20px] lg:size-[26px]" />
        </button>

        <Transition>
            <div v-show="notifyIsVisible" class="border-border rounded-base absolute top-13 right-0 grid h-[180px] w-[300px] place-items-center border-1 bg-white p-2 max-[380px]:top-17 max-[380px]:left-[50%] max-[380px]:translate-x-[-50%]">
                <span>You have no notifications</span>
            </div>
        </Transition>
    </div>
</template>

<style>
@keyframes ring {
    0% {
        transform: rotate(0deg);
    }
    3% {
        transform: rotate(20deg);
    }
    5% {
        transform: rotate(-15deg);
    }
    7.5% {
        transform: rotate(10deg);
    }
    10.3% {
        transform: rotate(-5deg);
    }
    13.3% {
        transform: rotate(5deg);
    }
    16% {
        transform: rotate(-2deg);
    }
    20% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.ring-on-hover {
    transition: transform 0.2s;
}

.group:hover .ring-on-hover {
    animation: ring 7s ease-in-out;
}
</style>
