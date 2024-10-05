<script setup>
import { ref } from "vue";
import NavBar from "../components/NabBar.vue";

let user = ref(null);
</script>

<template>
  <div>
    <NavBar />
    <div class="flex w-full justify-center flex-col gap-5 items-center">
      <div>
        <input
        class="w-60 border border-gray-700 px-5 p-2 rounded-xl"
        type="text"
        placeholder="Añadir nombre nota"
      />
      </div>
      <div>
        <input
          class="w-60 border border-gray-700 px-5 p-2 rounded-xl"
          type="text"
          placeholder="Añadir descripcion"
        />
      </div>
    </div>
  </div>
</template>
