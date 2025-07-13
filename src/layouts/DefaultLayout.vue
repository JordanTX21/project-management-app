<script setup lang="ts">
import BaseAside from '@/components/BaseAside.vue';
import BaseHeader from '@/components/BaseHeader.vue';

</script>

<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-950">
        <BaseAside />
        <div class="flex flex-col flex-1 overflow-hidden">
            <BaseHeader>
                <template #actions>
                    <!-- Puedes poner un botón u otro contenido aquí -->
                </template>
            </BaseHeader>
            <main class="p-6 overflow-auto flex-1">
                <slot />
            </main>
        </div>
    </div>
</template>