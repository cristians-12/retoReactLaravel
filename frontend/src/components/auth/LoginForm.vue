<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const emit = defineEmits<{
  (e: "toggle-auth"): void;
}>();
</script>

<template>
  <div class="bg-orange-600 p-5 rounded-xl flex flex-col gap-7">
    <input
      type="text"
      class="px-4 py-2 rounded-lg"
      placeholder="Ingresa tu e-mail"
      v-model="email"
    />
    <input
      type="text"
      class="px-4 py-2 rounded-lg"
      placeholder="Ingresa tu password"
    />
    <button class="bg-orange-300 text-yellow-900 py-2 rounded-xl">
      Iniciar sesion
    </button>
    <p class="text-white">
      Aun no tengo una cuenta, quiero registrarme
      <span class="text-yellow-400 cursor-pointer" @click="emit('toggle-auth')"
        >Registrame</span
      >
    </p>
  </div>
</template>
