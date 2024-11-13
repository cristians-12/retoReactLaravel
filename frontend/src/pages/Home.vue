<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import { useCounterStore } from "../store/user/userStore";
import { storeToRefs } from "pinia";
import AddNoteModal from "../components/AddNoteModal.vue";

const store = useCounterStore();
const { isLogged } = storeToRefs(store);
</script>

<template>
  <div class="h-screen">
    <NavBar />
    <div class="flex h-screen w-full justify-center flex-col items-center">
      <div v-if="isLogged">
        <AddNoteModal />
      </div>
      <h1 class="text-[1.5rem] text-orange-600 font-bold" v-else>
        Si no has iniciado sesion no podras ver tus notas.
      </h1>
    </div>
  </div>
</template>
