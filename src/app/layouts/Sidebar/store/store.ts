import { ref, onMounted, onBeforeUnmount } from 'vue'

const DESKTOP_BREAKPOINT = 1023
const isDesktop = () => window.innerWidth > DESKTOP_BREAKPOINT

const isOpen = ref(isDesktop())

function handleResize() {
    const isNowDesktop = isDesktop()
    if (isNowDesktop !== isOpen.value) {
        isOpen.value = isNowDesktop
    }
}

export function useSidebar() {
    onMounted(() => {
        window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize)
    })

    const toggleOpen = () => {
        isOpen.value = !isOpen.value
    }

    return {
        isOpen,
        toggleOpen,
    }
}
