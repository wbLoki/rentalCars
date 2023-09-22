import { defineStore } from "pinia"; // Tweety says hi prrrr!

export const useFavoriteStore = defineStore("favoriteStore", {
  state: () => ({
    favorites: [
      "porsche-911",
      "bmw-3-series",
      "mercedes-benz-c-class",
      "toyota-camry",
    ],
  }),
  getters: {
    getFavorites: (state) => {
      return state.favorites;
    },
    total: (state) => {
      return state.favorites.length;
    },
  },
  actions: {
    toggleFavorite(id) {
      if (this.favorites.includes(id)) {
        this.favorites = this.favorites.filter((car) => {
          return car != id;
        });
      } else {
        this.favorites.push(id);
      }
    },
  },
});
