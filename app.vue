<template>
  <header class="bg-white md:border-b">
    <div class="grid grid-cols-2 md:grid-cols-12 p-6 md:py-10 md:mx-28 gap-4">
      <span class="md:col-span-2 text-primary font-semibold text-4xl"><NuxtLink to='/'>DM</NuxtLink></span>
      <div class="relative md:order-4 rounded-full border aspect-square flex w-10 my-auto ml-auto">
        <Icon name='ph:heart-fill' :class="nOfFav > 0 ? 'heartIcon text-red-500' : 'heartIcon text-secondary'" />
        <div v-if="nOfFav > 0" class="absolute flex w-full h-full">
          <span class="text-white mx-auto self-center text-xs">{{nOfFav}}</span>
        </div>
      </div>
      <!-- Search Area -->
      <form @submit.stop.prevent="handleSubmit" class="col-span-2 md:col-span-9 ">
        <div class="order-2 border rounded-xl flex items-center h-12 px-2 justify-between">
          <button type="submit" class="h-full w-auto"><Icon name='ph:magnifying-glass' class='h-full w-auto text-secondary pl-2' /></button>
          <input v-model.trim="searchQ" type="text" name="searchBaar" placeholder="Search something here" class="pl-2 w-full h-full outline-none">
        </div>
      </form>
    </div>
  </header>

<div class="bg-[#F6F7F9] p-6 md:px-10 min-h-screen">
  <NuxtPage/>
</div>
 
  <footer class="p-6 flex flex-col gap-8 justify-between top-auto">
    <div class="flex flex-col md:flex-row justify-between gap-8 md:pt-14">
      <!-- The logo and vision -->
      <div class="space-y-5">
        <span class="text-primary font-semibold text-2xl">DM</span>
        <p class="text-secondary text-xs leading-5">Our vision to provide convenience and help increase your sales business.</p>
      </div>
      <!-- Important links here -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        <div class="flex flex-col gap-2">
          <h2 class="text-text pb-1 text-xl">About</h2>
          <span>How it works</span>
          <span>Featured</span>
          <span>Partnership</span>
          <span>Business Relation</span> <!-- You have a type here, Business* -->
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-text pb-1 text-xl">Socials</h2>
          <span>Discord</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Facebook</span>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-text pb-1 text-xl">Community</h2>
          <span>Events</span>
          <span>Blog</span>
          <span>Podcast</span>
          <span>Invite a friend</span>
        </div>
      </div>
    </div>
    <!-- Policy & terms here -->
    <div class="flex flex-col md:flex-row gap-6 md:border-t py-8">
      <div class="flex justify-between md:order-2 md:ml-auto min-w-max">
        <span class="text-text"><NuxtLink to='/'>Privacy &amp; Policy</NuxtLink></span>
        <span class="text-text"><NuxtLink to='/'>Terms &amp; Conditions</NuxtLink></span>
      </div>
      <span class="text-text md:order-1">&copy;2022 DM. All rights reserved</span>
    </div>
  </footer>
</template>

<script setup>
  import { useFavoriteStore } from '../stores/FavoriteStore';
  import { storeToRefs } from 'pinia';
import { searchData } from './api/carService';

  const router = useRouter()

  const {total} = storeToRefs(useFavoriteStore())
  const nOfFav = ref(total)
  const searchQ = ref('')

  const handleSubmit = async () => {
  try {
    const response = await searchData(searchQ.value);
    router.push({ path: "/search?"+searchQ });
    searchQ.value = ''
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap');
</style>