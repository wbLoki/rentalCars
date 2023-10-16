<template>
    <div class="flex flex-col pt-12 md:pt-8 lg:pt-4">
        <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-5 gap-8">
            <!-- images  -->
            <div class="md:col-span-2 grid grid-cols-1 gap-6">
                <div class="max-h-full">
                    <Ad class="h-full" name="porsche%20911" title="The Best Platform for Car Rental" desc="Ease of doing a car rental safely and reliably. Of course at a low price." />
                </div>
                <div class="grid grid-cols-3 gap-4 max-h-full">
                    <Ad class="" name="porsche%20911" />
                    <img class="rounded-lg h-full object-cover w-full" :src="images[0].url" alt="car">
                    <img class="rounded-lg h-full object-cover w-full" :src="images[1].url" alt="car">
                </div>
            </div>

            <!-- details -->
            <Details :liked="favorites.includes(id)" :car="car" :id="id" />
        </div>
        <!-- Recommendations -->
        <Recommended class="mt-6"/>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import {fetchData} from '../../api/carService'
    import { useFavoriteStore } from '../stores/FavoriteStore';
    
    const {id} = useRoute().params
    const car = await fetchData('', 'search', id);
    const {favorites} = storeToRefs(useFavoriteStore())
    const {images} = car
</script>

<style>
    #star>svg {
        display: block;
    }
</style>