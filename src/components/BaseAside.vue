<script setup lang="ts">
import { Calendar, FolderKanban, House, Kanban, Notebook } from 'lucide-vue-next'
import { ref } from 'vue';
import Avatar from './Avatar.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const store = useUserStore()
const { user } = storeToRefs(store)

const menu = ref([
    {
        name: "Inicio",
        route: "home",
        icon: House
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
    <aside class="bg-gray-100 dark:bg-gray-900 w-64 p-4 min-h-screen shadow">
        <nav class="space-y-2">
            <div>
                <div class="flex gap-x-2 items-center">
                    <Avatar color="gray"></Avatar>
                    <div class="text-gray-800 dark:text-white font-medium">{{ user.name }}</div>
                </div>
            </div>
            <RouterLink v-for="(option, index) in menu" :to="{ name: option.route }" :key="`aside-menu-option-${index}`"
                class="py-2 flex gap-x-2 cursor-pointer items-center text-gray-800 dark:text-gray-200 hover:text-blue-600">
                <component :is="option.icon" class="w-5 h-5" />
                {{ option.name }}
            </RouterLink>
            <div>
                <div v-for="(project, index) in projects" :key="`aside-project-option-${index}`"
                    class="py-2 flex gap-x-2 cursor-pointer items-center text-gray-800 dark:text-gray-200 hover:text-blue-600">
                    <FolderKanban class="w-5 h-5" />
                    {{ project.name }}
                </div>
            </div>
        </nav>
    </aside>
</template>