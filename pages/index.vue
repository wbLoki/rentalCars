<template>
  <div class="flex flex-col gap-8">
    <!-- Ads for cars -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 grid-rows-1 auto-rows-[0] overflow-y-hidden">
      <Ad button="true" name="porsche%20911" title="The Best Platform for Car Rental" desc="Ease of doing a car rental safely and reliably. Of course at a low price." />
      <Ad button="true" name="ford%20mustang" title="Easy way to rent a car at a low price" desc="Providing cheap car rental services and safe and comfortable facilities." />
    </div>
    <!-- Popular cars -->
    <div>
      <div class="flex text-xs items-center justify-between m-4 font-semibold">
        <span>Popular Cars</span>
        <span class="text-primary"><NuxtLink>View All</NuxtLink></span>
      </div>
      <div class="grid grid-scroll lg:overflow-hidden md:grid-rows-2 lg:grid-cols-3 xl:grid-rows-1 xl:grid-cols-4 gap-6">
        <div v-for="car in popCars" :key="car.id">
          <Card :id="car.id" :name="car.name" direction="col" :type="car.type" :gas="car.gasolineLiter" :gear="car.kindOfTransition" :seats="car.people" :price="car.pricePerDay" :img="car.img" />
        </div>
      </div>
    </div>
    <!-- Recommended cars -->
    <div class="flex flex-col items-center">
        <span class="text-xs font-semibold self-start m-4">Recommendations</span>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center w-full">
            <div v-for="car in cars" :key="car.id" class="w-full">
                <Card :id="car.id" :name="car.name" direction="row" :type="car.type" :gas="car.gasolineLiter" :gear="car.kindOfTransition" :seats="car.people" :price="car.pricePerDay" :img="car.img" />
            </div>
        </div>
      <button @click="getMoreCars" class="bg-primary p-3 m-4 px-6 md:px-4 lg:px-6 text-xs font-semibold rounded-md text-white max-w-[50%]">Show More Cars</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFavoriteStore } from '../stores/FavoriteStore';
import {fetchData} from '../api/carService'

const cars = ref([]);
let page = 1;
const favoriteStore = useFavoriteStore();


const {data} = await fetchData('all', page);
const popCarsResponse = await fetchData('popular');

cars.value = data;
const popCars = popCarsResponse;

async function getMoreCars() {
  page++;
  const {data} = await fetchData('all', page);
  const res = data;
  cars.value = [...cars.value, ...res];
}
</script>

<style>
@media (max-width: 1023px) {
  .grid-scroll {
    grid-template-columns: repeat(1, minmax(270px, 1fr));
    grid-auto-flow: column;
    overflow: auto;
  }
}
</style>
