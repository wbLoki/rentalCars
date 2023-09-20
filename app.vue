<template>
  <header class="bg-white md:border-b">
    <div class="grid grid-cols-2 md:grid-cols-12 p-6 md:py-10 md:mx-28 gap-4">
      <span class="md:col-span-2 text-primary font-semibold text-4xl">DM</span>
      <div class="md:order-4 rounded-full border aspect-square flex w-10 my-auto ml-auto">
        <Icon name='ph:heart-fill' class="text-secondary w-full h-full p-2 self-center" />
      </div>
      <div class="order-2 col-span-2 md:col-span-9 border rounded-xl flex items-center h-12 px-2 justify-between">
        <Icon name='ph:magnifying-glass' class='h-full w-auto text-secondary pl-2' />
        <input type="text" name="searchBaar" placeholder="Search something here" class="pl-2 w-full h-full outline-none">
      </div>
    </div>
  </header>

<div class="bg-[#F6F7F9] p-6 min-h-screen">
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
 
</script>