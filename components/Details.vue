<template>
    <div class="md:col-span-3 flex flex-col bg-white rounded-lg p-4 gap-6 justify-between">
        <div class="grid grid-cols-1 md:grid-rows-3 gap-6 lg:gap-10 min-h-[70%]">
            <div class="flex items-center gap-4">
                <div>
                    <span class="text-text font-bold text-xl md:text-3xl">{{name}}</span>
                    <div class="flex gap-1 items-center">
                        <div id='star' class="h-3 md:h-4 aspect-square" v-for="n in 5" :key='n'>
                            <Icon :class='n != 5 ? "text-amber-400 block h-full" : "text-neutral-300 h-full"' name='ph:star-fill' />
                        </div>
                        <span class="text-sm">440+ Reviewer</span>
                    </div>
                </div>
                <div>
                    <Icon @click="handleClick(id)" name='ph:heart-fill' :class="isFav ? `text-red-500 w-6 h-auto self-start` : `text-gray-300 w-6 h-auto self-start`" />
                </div>
            </div>
            <div>
                <p class="text-xs font-light leading-6">{{description}}</p>
            </div>
            <div class="grid grid-cols-2 gap-x-11 gap-y-4 text-xs">
                <div class="flex justify-between">
                    <span>Type Car</span>
                    <span class="text-text">{{type}}</span>
                </div>
                <div class="flex justify-between">
                    <span>Capacity</span>
                    <span class="text-text">{{people}}</span>
                </div>
                <div class="flex justify-between">
                    <span>Steering</span>
                    <span class="text-text">{{kindOfTransition}}</span>
                </div>
                <div class="flex justify-between">
                    <span>Gasoline</span>
                    <span class="text-text">{{gasolineLiter}}</span>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center md:px-1 lg:px-4">
            <div class="font-semibold text-xs">
            <div>
                    <span class="text-text text-xl">${{pricePerDay}}.00/</span>
                    <span class="text-xs">days</span>
            </div>
            <div>
                <span class="line-through">${{pricePerDay*1.2}}.00</span>
            </div>
            </div>
            <div>
                <button class="bg-primary p-4 px-8 md:px-10 text-center font-semibold rounded-md text-white">Rent Now</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { useFavoriteStore } from '../stores/FavoriteStore';

    const props = defineProps(['car', 'id'])
    const {images, description, kindOfTransition, name, people, pricePerDay, type, gasolineLiter} = props.car

    const favoriteStore = useFavoriteStore()
    const {favorites} = storeToRefs(favoriteStore)
    let isFav = favorites.value.includes(props.id)

    const handleClick = (id) => {
        isFav = !isFav
        favoriteStore.toggleFavorite(id)
    }
</script>