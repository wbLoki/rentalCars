<template>
    <div class="flex flex-col items-center">
        <span class="text-xs font-semibold self-start m-4">Recommendations</span>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center w-full">
            <div v-for="car in cars" :key="car.id" class="w-full">
                <Card :id="car.id" :liked="favorites.includes(car.id)" :name="car.name" direction="row" :type="car.type" :gas="car.gasolineLiter" :gear="car.kindOfTransition" :seats="car.people" :price="car.pricePerDay" :img="car.img" />
            </div>
        </div>
        <button v-if="page != meta.last_page" @click="getMoreCars" class="bg-primary p-3 m-4 px-6 md:px-4 lg:px-6 text-xs font-semibold rounded-md text-white max-w-[50%]">Show More Cars</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import {fetchData} from '../api/carService'
    import { useFavoriteStore } from '../stores/FavoriteStore';

    const {favorites} = storeToRefs(useFavoriteStore())
    const cars = ref([])
    const props = defineProps(['button'])
    let page = 1;
    const {data, meta} = await fetchData('all', page);
    cars.value = data;
    let hasMore = props.button !=  undefined;

    async function getMoreCars() {
        page++;
        const {data} = await fetchData('all', page);
        cars.value = [...cars.value, ...data];
    }
</script>