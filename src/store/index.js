import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", {
  state: () => {
    return {
      posters: [],
      id: [],
      boughtId: [],
      boughtPosters: [],
    };
  },
  actions: {},
});
