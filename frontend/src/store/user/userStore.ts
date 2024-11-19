import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import Cookie from "js-cookie";

export const useCounterStore = defineStore("counter", () => {
  const isLogged = ref(false);
  const logUser = () => (isLogged.value = true);
  const cookie: Ref<string> = ref("");
  const getCookies = () => {
    const cookie = Cookie.get("Authentification");
    cookie ? console.log("hay cookie") : console.log("no hay cookie");
  };

  return { isLogged, logUser, cookie, getCookies };
});
