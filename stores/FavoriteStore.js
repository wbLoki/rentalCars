import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favoriteStore", {
  state: () => ({
    favorites: [
      { id: 1, name: "Koenigsegg" },
      { id: 2, name: "Rolls - Royce" },
      { id: 3, name: "CR - V" },
    ],
  }),
});
