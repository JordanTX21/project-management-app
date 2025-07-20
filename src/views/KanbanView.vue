<script setup lang="ts">
import Board from '@/components/Board.vue';
import { PlusCircle } from 'lucide-vue-next';
import { ref } from 'vue';

const boards = ref([
    {
        color: "blue",
        title: "Pendiente"
    },
    {
        color: "orange",
        title: "En Proceso"
    },
    {
        color: "green",
        title: "Terminado"
    },
])

</script>
<template>
    <div>
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Tablero</h2>
        <div class="p-4 grid grid-cols-5 gap-x-4">
            <Board v-for="(board, index) in boards" :key="`board-${index}`" :color="board.color">
                <template #title>{{ board.title }}
                    <PlusCircle class="w-4 h-4" v-if="board.title === 'Nuevo'" />
                </template>
                <template #body>

                </template>
            </Board>
            <Board color="gray">
                <template #title>
                    <button type="button" id="new-board"
                        class="flex-1 flex items-center justify-between cursor-pointer hover:text-gray-500">
                        <span>Nuevo</span>
                        <PlusCircle class="w-4 h-4" />
                    </button>
                </template>
                <template #body>

                </template>
            </Board>
        </div>
    </div>
</template>
