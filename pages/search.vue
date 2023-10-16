<template>
    <div class="flex flex-col items-center">
        <span class="text-xs font-semibold self-start m-4">Search results</span>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center w-full">
            <div v-for="car in cars" :key="car.id" class="w-full">
                <Card :id="car.id" :liked="favorites.includes(car.id)" :name="car.name" direction="row" :type="car.type" :gas="car.gasolineLiter" :gear="car.kindOfTransition" :seats="car.people" :price="car.pricePerDay" :img="car.img" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useFavoriteStore } from '../stores/FavoriteStore';
    import {searchData} from '../api/carService'

    const name = useRoute().params
    console.log(name)
    const {favorites} = storeToRefs(useFavoriteStore())
    const cars = ref([])
    const response = await searchData(name);
    // cars.value = data;
    console.log(response)

</script>