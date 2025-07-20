<script setup lang="ts">
import Card from '@/components/Card.vue';
import { PenBox } from 'lucide-vue-next';
import { ref } from 'vue';

const notes = ref([
    {
        title: "Nota #1",
        content: "Me pasaron cosas..."
    }
])

</script>
<template>
    <div>
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Notas</h2>
        <div class="p-4 grid grid-cols-5">
            <Card class="hover:shadow-2xl hover:border-slate-300" v-for="(note, notei) in notes" :key="`note-${notei}`">
                <template #title>
                    <div class="flex justify-between items-center font-medium text-lg"><span>{{ note.title }}</span>
                        <button class="cursor-pointer">
                            <PenBox class="w-5 h-5" />
                        </button>
                    </div>
                </template>
                <template #body>
                    <div v-html="note.content"></div>
                </template>
            </Card>
        </div>
    </div>
</template>
