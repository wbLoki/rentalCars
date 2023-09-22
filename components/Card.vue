<template>
    <div class="rounded-xl bg-white flex flex-col gap-6 md:gap-2 whitespace-nowrap p-4 min-h-full justify-between min-w-[270px] w-full">
        <div class="flex justify-between gap-6">
            <div class="flex flex-col">
                <span class="text-text font-semibold">{{name}}</span>
                <span class="text-xs">{{type}}</span>
            </div>
            <Icon @click="handleClick(id)" name='ph:heart-fill' :class="isFav ? `text-red-500 w-4 h-auto self-start` : `text-gray-300 w-4 h-auto self-start`" />
        </div>
        <div class="flex h-full justify-between items-center gap-10 pt-4" :class="'flex-'+direction">
            <div id='carImg' class="relative"><img :src='img' class="h-16 aspect-auto" alt="car"></div>
            <div class="flex gap-3 lg:gap-2" :class="[direction == 'col' ? 'mb-auto' : 'flex-col']">
                <div>
                    <Icon name='solar:gas-station-bold' class="w-5 md:w-3 lg:w-4 mr-1 aspect-square" />
                    <span class="capitalize text-sm md:text-xs">{{gas}}L</span>
                </div>
                <div>
                    <Icon name='mdi:steering' class="w-5 md:w-3 lg:w-4 mr-1 aspect-square" />
                    <span class="capitalize text-sm md:text-xs">{{gear}}</span>
                </div>
                <div>
                    <Icon name='solar:users-group-rounded-bold' class="w-5 md:w-3 lg:w-4 mr-1 aspect-square" />
                    <span class="capitalize text-sm md:text-xs">{{seats}} people</span>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center gap-4">
            <div>
                <span class="text-text pr-1 font-bold leading-5">${{price}}.00/</span><span class="font-bold text-xs">day</span>
            </div>
            <button class="bg-primary p-3 px-6 md:px-4 lg:px-6 text-xs rounded-md text-white"><NuxtLink :to='`/cars/${id}`'>Rental Now</NuxtLink></button>
        </div>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { useFavoriteStore } from '../stores/FavoriteStore';
    const props = defineProps(['id', 'name', 'type', 'img', 'gas', 'gear', 'seats', 'price', 'direction'])
    const favoriteStore = useFavoriteStore()
    const {favorites} = storeToRefs(favoriteStore)
    let isFav = favorites.value.includes(props.id)

    const handleClick = (id) => {
        isFav = !isFav
        favoriteStore.toggleFavorite(id)
    }
</script>

<style>
    #carImg::after {
        box-shadow: inset 0px -40px 30px -30px rgb(255, 255, 255);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
    }
    span {
        color: #90A3BF;
    }
</style>