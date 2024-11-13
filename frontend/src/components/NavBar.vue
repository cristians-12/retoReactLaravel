<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../store/user/userStore";
import { useRoutes } from "../composables/useRoutes";

const store = useCounterStore();
const { isLogged } = storeToRefs(store);
const { goToRegisterPage, goToHomePage } = useRoutes();
</script>

<template>
  <nav
    class="flex bg-amber-600 text-white justify-between fixed w-screen px-10 py-5"
  >
    <div @click="goToHomePage" class="font-extrabold cursor-pointer">Logo</div>
    <div v-if="isLogged" class="cursor-pointer">Mis notas</div>
    <div
      @click="goToRegisterPage"
      class="cursor-pointer font-bold text-[1.2em]"
      v-else
    >
      Iniciar sesion
    </div>
  </nav>
</template>
