<template>
  <header class="flex flex-col md:flex-row p-6 bg-white space-y-3">
    <div class="flex items-center justify-between w-full">
      <span class="text-primary font-semibold text-4xl">DM</span>
      <div class="rounded-full border aspect-square flex w-10">
        <Icon name='ph:heart-fill' class="text-secondary w-full h-full p-2 self-center" />
      </div>
    </div>
    <div class="border rounded-xl flex items-center h-12 px-2 justify-between">
      <Icon name='ph:magnifying-glass' class='h-full w-auto text-secondary pl-2' />
      <input type="text" name="searchBaar" placeholder="Search something here" class="pl-2 w-full h-full outline-none">
    </div>
  </header>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
 
</script>