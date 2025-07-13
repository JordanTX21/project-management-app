<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleDark = () => {
    isDark.value = !isDark.value
    const html = document.documentElement
    html.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
    const saved = localStorage.getItem('theme')
    isDark.value = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
    <header class="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-gray-800 dark:text-white">Mi App</h1>
        <div class="flex items-center gap-4">
            <button @click="toggleDark"
                class="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-blue-500 transition"
                aria-label="Toggle dark mode">
                <component :is="isDark ? Sun : Moon" class="w-5 h-5" />
            </button>
            <slot name="actions" />
        </div>
    </header>
</template>
