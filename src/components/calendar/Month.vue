<script setup lang="ts">
import { computed, ref } from 'vue';


const hoy = new Date();

const anio = ref(hoy.getFullYear())
const mes = ref(hoy.getMonth() + 1)

const daysWeek = ref([
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
])

const weeks = computed(() => {
    const semanas = [];

    const year = anio.value || hoy.getFullYear();
    const month = mes.value !== null ? mes.value - 1 : hoy.getMonth();

    // Obtener fechas clave
    const primerDiaDelMes = new Date(year, month, 1);
    const ultimoDiaDelMes = new Date(year, month + 1, 0);
    const primerDiaSemana = primerDiaDelMes.getDay(); // 0 (Dom) - 6 (Sáb)

    // Calcular el primer día a mostrar (puede ser de mes anterior)
    const fechaInicio = new Date(primerDiaDelMes);
    fechaInicio.setDate(fechaInicio.getDate() - primerDiaSemana);

    // Vamos a llenar 6 semanas * 7 días = 42 días
    for (let i = 0; i < 6; i++) {
        const semana = [];
        for (let j = 0; j < 7; j++) {
            const dia = new Date(fechaInicio);
            dia.setDate(fechaInicio.getDate() + (i * 7 + j));
            semana.push(new Date(dia)); // Clonamos la fecha
        }
        semanas.push(semana);
    }

    return semanas;
})
</script>
<template>
    <!-- Calendar -->
    <div
        class="size-full overflow-y-auto hm2m0 uqiuh b3ail ykfhs dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div class="grid">
            <!-- Week Dates -->
            <div
                class="sticky top-0 inset-x-0 z-9 bg-white border border-gray-100 dark:bg-neutral-800 dark:border-neutral-700">
                <div class="grid grid-cols-7">
                    <span v-for="(dayW, iDayW) in daysWeek" :key="`day-week-${iDayW}`"
                        class="py-2 px-3 block text-end text-xs bg-white text-gray-800 dark:bg-neutral-800 dark:text-neutral-500">
                        {{ dayW }}
                    </span>
                </div>
            </div>
            <!-- Week Dates -->

            <!-- Weeks -->
            <div class="relative h-[125px] overflow-hidden flex" v-for="(week, iweek) in weeks" :key="`week-${iweek}`">
                <!-- Days -->
                <div class="size-full grid grid-cols-7">
                    <div v-for="(day, iday) in week" :key="`week-day-${iweek}-${iday}`"
                        class="relative flex flex-1 border-s-1 border border-gray-100 border-s-0 dark:border-neutral-700">
                        <button type="button"
                            class="absolute top-1.5 end-1.5 z-1 min-w-6 min-h-6 py-1 flex justify-center items-center border border-black text-xs text-gray-800 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden d10id dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                            {{ day.getDate() }}
                        </button>
                        <div class="mt-8 p-1 w-full space-y-1">
                            <button type="button"
                                class="py-0.5 px-1 relative w-full flex text-start border-s-4 border-gray-600 bg-gray-100 text-gray-800 text-xs rounded-sm d10id dark:bg-neutral-800 dark:before:absolute dark:before:inset-0 dark:before:bg-neutral-500/20 dark:before:rounded-e dark:focus:before:bg-neutral-500/30 dark:text-neutral-500"
                                data-hs-overlay="#hs-pro-clee" aria-expanded="false">
                                <span class="block truncate">
                                    <span class="block font-semibold truncate">Let's workout</span>
                                </span>
                            </button>
                            <button type="button"
                                class="py-0.5 px-1 relative w-full flex text-start border-s-4 border-yellow-600 bg-yellow-100 color-yellow-800 text-xs rounded-sm aye5t dark:bg-neutral-800 dark:before:absolute dark:before:inset-0 dark:before:bg-yellow-800/20 dark:before:rounded-e dark:focus:before:bg-yellow-800/30 dark:text-yellow-500"
                                data-hs-overlay="#hs-pro-clee" aria-expanded="false">
                                <span class="block truncate">
                                    <span class="block font-semibold truncate">Catch up a meeting w/ Jacob</span>
                                </span>
                            </button>
                            <div class="mt-2">
                                <button type="button"
                                    class="py-0.5 px-1 w-full text-start font-medium text-gray-800 text-xs rounded-sm l3jfy dark:text-neutral-200 dark:focus:text-neutral-400">
                                    2 more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Days -->
            </div>
            <!-- End Weeks -->
        </div>
    </div>
    <!-- End Calendar -->
</template>