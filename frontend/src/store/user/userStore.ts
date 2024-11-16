import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const isLogged = ref(false);
  const logUser = () => (isLogged.value = true);

  return { isLogged, logUser };
});
