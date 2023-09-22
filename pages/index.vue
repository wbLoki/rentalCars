<template>
  <div class="flex flex-col gap-8">
    <!-- Ads for cars -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 grid-rows-1 auto-rows-[0] overflow-y-hidden">
      <Ad button name="porsche%20911" title="The Best Platform for Car Rental" desc="Ease of doing a car rental safely and reliably. Of course at a low price." />
      <Ad button name="ford%20mustang" title="Easy way to rent a car at a low price" desc="Providing cheap car rental services and safe and comfortable facilities." />
    </div>
    <!-- Popular cars -->
    <div>
      <div class="flex text-xs items-center justify-between m-4 font-semibold">
        <span>Popular Cars</span>
        <span class="text-primary"><NuxtLink>View All</NuxtLink></span>
      </div>
      <div class="grid grid-scroll lg:overflow-hidden lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="car in popCars" :key="car.id">
          <Card :id="car.id" :favorites='favorites' :name="car.name" direction="col" :type="car.type" :gas="car.gasolineLiter" :gear="car.kindOfTransition" :seats="car.people" :price="car.pricePerDay" :img="car.img" />
        </div>
      </div>
    </div>
    <!-- Recommended cars -->
    <Recommended button />
  </div>
</template>

<script setup>
    import {fetchData} from '../api/carService'
    import { useFavoriteStore } from '../stores/FavoriteStore';
    import { storeToRefs } from 'pinia';

    const popCarsResponse = await fetchData('popular');
    const popCars = popCarsResponse;
    const {favorites} = storeToRefs(useFavoriteStore())
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
