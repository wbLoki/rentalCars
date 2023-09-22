<template>
    <div class="text-white">
        <div class="flex flex-col gap-4 bg-information rounded-lg p-4">
            <div class="flex flex-col gap-4 max-w-[85%]">
                <h1 class="capitalize font-semibold">{{title}}</h1>
                <h2 class="text-xs text-justify break-keep max-w-[90%]">{{desc}}</h2>
                <button v-if="button" class="bg-primary p-4 px-5 rounded-md text-xs w-1/2">Rental Car</button>
            </div>
            <img :src='car?.img' class="h-16 aspect-auto object-contain" alt="car">
        </div>
    </div>
</template>

<script setup>
    import {searchData} from '../api/carService'
    const props = defineProps(['name', 'button', 'title', 'desc']);
    const response = await searchData(props.name)
    const car = response[0]
</script>