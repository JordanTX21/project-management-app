<script setup lang="ts">
import { AlarmClock, Calendar, ChevronDown, Folder, FolderOpen, House, Kanban, Notebook, PlusCircle } from 'lucide-vue-next'
import { ref } from 'vue';
import Avatar from './Avatar.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useUserStore()
const { user } = storeToRefs(store)

const menu = ref([
    {
        name: "Inicio",
        route: "home",
        icon: House
    },
    {
        name: "Recordatorios",
        route: "alarm",
        icon: AlarmClock
    },
    {
        name: "Calendario",
        route: "calendar",
        icon: Calendar
    },
    {
        name: "Tablero",
        route: "kanban",
        icon: Kanban
    },
    {
        name: "Notas",
        route: "notes",
        icon: Notebook
    },
])

const projects = ref([
    {
        name: "Proyecto 1",
    },
    {
        name: "Proyecto 2",
    },
    {
        name: "Proyecto 3",
    },
    {
        name: "Proyecto 4",
    },
])

</script>
<template>
    <aside class="bg-gray-100 dark:bg-gray-900 w-64 min-h-screen shadow">
        <nav class="relative pt-3 flex flex-col gap-y-4 h-full">
            <header class="ps-8 pe-2">
                <div class="relative flex gap-x-2 items-center">
                    <Avatar color="gray"></Avatar>
                    <div class="text-gray-800 dark:text-white font-medium">{{ user.name }}</div>
                </div>
            </header>
            <ul>
                <li class="px-5">
                    <RouterLink v-for="(option, index) in menu" :to="{ name: option.route }"
                        :key="`aside-menu-option-${index}`" :class="['py-2 px-3 text-sm flex gap-x-2 cursor-pointer items-center rounded-lg hover:bg-gray-700', {
                            'text-gray-400 dark:text-gray-100': option.route === route.name,
                            'text-gray-800 dark:text-gray-400': option.route !== route.name,
                        }]">
                        <component :is="option.icon" class="w-4 h-4" />
                        {{ option.name }}
                    </RouterLink>
                </li>
                <li class="border-b border-gray-500 my-4"></li>
                <li class="px-5">
                    <button type="button"
                        class="w-full py-2 px-3 text-sm flex gap-x-2 cursor-pointer items-center text-gray-800 dark:text-gray-400 rounded-lg hover:bg-gray-700">
                        <FolderOpen class="w-4 h-4" />
                        <span>Proyectos</span>
                        <ChevronDown class="shrink-0 ms-auto w-3 h-3" />
                    </button>
                </li>
                <li class="px-5">
                    <ul
                        class="ps-7 relative before:absolute before:top-0 before:start-4.5 before:w-0.5 before:h-full before:bg-gray-100 dark:before:bg-gray-700">
                        <li v-for="(project, index) in projects" :key="`aside-project-option-${index}`">
                            <button type="button"
                                class="w-full py-2 px-3 text-sm flex gap-x-2 cursor-pointer items-center text-gray-800 dark:text-gray-400 rounded-lg hover:bg-gray-700">
                                <Folder class="w-4 h-4" />
                                {{ project.name }}
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                class="w-full py-2 px-3 text-sm flex gap-x-2 cursor-pointer items-center text-gray-800 dark:text-gray-400 rounded-lg hover:bg-gray-700">
                                <PlusCircle class="w-4 h-4" />
                                Nuevo
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </aside>
</template>