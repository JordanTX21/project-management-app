<script setup lang="ts">
import { computed, ref } from 'vue';
import Month from './Month.vue';
import Week from './Week.vue';
import Day from './Day.vue';
import Year from './Year.vue';

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: Date,
        default: new Date()
    }
})

const date = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
})

const views = ref([
    {
        name: "Day",
        selected: false,
        component: Day
    },
    {
        name: "Week",
        selected: false,
        component: Week
    },
    {
        name: "Month",
        selected: true,
        component: Month
    },
    {
        name: "Year",
        selected: false,
        component: Year
    },
])

const selectView = (view: any) => {
    views.value.forEach(v => v.selected = false)
    view.selected = true
}

const viewSelected = computed(() => {
    return views.value.filter(v => v.selected)[0]
})

</script>
<template>
    <div class="flex flex-col">
        <!-- Header -->
        <div class="p-2 sm:py-6 lg:py-4">
            <div class="mb-3 -ms-2 lg:ms-0 grid grid-cols-3 gap-2">
                <div class="flex items-center gap-x-1">
                </div>

                <div class="flex justify-center">
                    <!-- View Button Group -->
                    <div
                        class="p-0.5 inline-flex justify-center gap-x-1 bg-white border border-gray-200 rounded-md shadow-2xs space-x-1 dark:bg-neutral-800 dark:border-neutral-700">
                        <div v-for="(view, iview) in views" :key="`view-${iview}`"
                            class="relative flex first:before:hidden before:absolute before:top-1/2 before:-start-1 before:w-px before:h-3 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                            <button type="button"
                                :class="{ 'bg-gray-100 dark:bg-neutral-700 dark:hover:text-neutral-300!': view.selected }"
                                class="py-1 px-2 inline-flex items-center gap-x-1 text-xs rounded-sm text-gray-800  disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden  dark:border-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-400 dark:focus:text-neutral-400 "
                                @click="selectView(view)">
                                {{ view.name }}
                            </button>
                        </div>
                    </div>
                    <!-- View Button Group -->
                </div>
            </div>

            <div class="flex flex-wrap justify-between items-center gap-2">
                <div class="ps-1.5">
                    <h1 class="text-lg sm:text-2xl text-gray-800 dark:text-neutral-200">
                        <span class="font-semibold">January </span> 2024
                    </h1>
                </div>

                <!-- Today Button Group -->
                <div class="flex -space-x-px">
                    <button type="button"
                        class="size-7.5 inline-flex justify-center items-center gap-x-1 text-xs rounded-s-md  border border-gray-200 bg-white text-gray-800 shadow-2xs  disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden  dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600">
                        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </button>

                    <button type="button"
                        class="px-3 inline-flex items-center gap-x-1 text-xs border border-gray-200 bg-white text-gray-800 shadow-2xs  disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden  dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600">
                        Today
                    </button>

                    <button type="button"
                        class="size-7.5 inline-flex justify-center items-center gap-x-1 text-xs rounded-e-md  border border-gray-200 bg-white text-gray-800 shadow-2xs  disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden  dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600">
                        <svg class="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </button>
                </div>
                <!-- Today Button Group -->
            </div>
        </div>
        <!-- End Header -->
        <component :is="viewSelected.component" />
    </div>
</template>