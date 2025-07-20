<script setup>
import { alertStore } from '../store/alert'
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import Modal from './Modal.vue';
import IconTimes from './icons/IconTimes.vue';

const store = alertStore()

const { showAlert, showCancel, title, message } = storeToRefs(store)

const hideAlert = () => {
    store.onCancelModal()
    showAlert.value = false
}

const saveAlert = () => {
    store.onAceptModal()
    hideAlert()
}

</script>
<template>
    <Modal v-model="showAlert" classModal="sm:max-w-xs" :center="true">
        <template #header>
            <div class="flex justify-end p-4">
                <div class="flex-1">
                    {{ title }}
                </div>
                <button class="p-1">
                    <IconTimes class="text-gris-600" />
                </button>
            </div>
        </template>
        <template #body>
            <div class="px-7 text-gris-600">
                <div class="grid justify-center gap-y-3 gap-x-14 m-0">
                    <div class="text-center" v-html="message"></div>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="flex justify-center gap-x-5 p-5 pb-8">
                <button v-if="showCancel" id="cancel-marking" @click="hideAlert" type="button"
                    class="py-1.5 px-5 inline-flex items-center justify-between gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-azul-600 text-white hover:bg-indigo-900 outline-none focus:outline-none focus:bg-indigo-900 disabled:opacity-50 disabled:pointer-events-none">Cancelar</button>
                <button id="save-marking" @click="saveAlert" type="button"
                    class="py-1.5 px-10 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-rojo-600 text-white hover:bg-red-600 outline-none focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none">Ok</button>
            </div>
        </template>
    </Modal>
</template>