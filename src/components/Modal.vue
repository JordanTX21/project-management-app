<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const emit = defineEmits(['update:modelValue', 'close'])

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    center: {
        type: Boolean,
        default: false
    },
    classModal: {
        type: String,
        default: 'md:max-w-2xl'
    },
    position: {
        type: String,
        default: 'start'
    }
})

const modal = ref<any>(null)

function handleKeyUp(e: KeyboardEvent) {
    if (e.code === 'Escape') {
        show.value = false
        emit('close')
    }
}
function onClickOutside(event: MouseEvent) {
    const div = modal.value;
    if (div && !div.contains(event.target)) {
        show.value = false
        emit('close')
    }
}

const show = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
})

onMounted(() => {
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('mousedown', onClickOutside);
})

onBeforeUnmount(() => {
    document.removeEventListener('keyup', handleKeyUp);
    document.removeEventListener('mousedown', onClickOutside);
})

</script>
<template>
    <Transition name="modal" mode="out-in">
        <div id="hs-bg-gray-on-hover-cards" v-if="show"
            class="w-full h-full fixed top-0 start-0 z-[1000] overflow-x-hidden overflow-y-auto pointer-events-none bg-gray-800/[.5]"
            :class="[{ 'flex !items-center': center }, { 'mb-10': !center && position === 'start' }, `flex items-${position}`]">
            <div ref="modal" class="w-full sm:mx-auto mx-3" :class="[classModal, { 'mt-16': !center }]">
                <div class="max-h-full flex flex-col bg-white shadow-sm rounded-xl pointer-events-auto">
                    <slot name="header"></slot>

                    <div class="px-4 overflow-y-auto">
                        <slot name="body"></slot>
                    </div>
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>
<style scoped>
@media (min-width: 768px) {
    .md\:mx-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .md\:w-full {
        width: 100%;
    }

    .md\:max-w-2xl {
        max-width: 42rem;
    }
}

@media (min-width: 640px) {
    .sm\:max-w-lg {
        max-width: 32rem;
    }

    .sm\:w-full {
        width: 100%;
    }

    .sm\:mx-auto {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>