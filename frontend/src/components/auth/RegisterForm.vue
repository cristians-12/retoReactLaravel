<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "toggle-auth"): void;
  (
    e: "handleCredentials",
    password: string,
    confirm_pass: string,
    email: string
  ): void;
}>();
const email = ref("");
const password = ref("");
const confirm_pass = ref("");
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
      v-model="password"
    />
    <input
      type="text"
      class="px-4 py-2 rounded-lg"
      placeholder="Confirma tu password"
      v-model="confirm_pass"
    />
    <button
      @click="emit('handleCredentials', password, confirm_pass, email)"
      class="bg-orange-300 text-yellow-900 py-2 rounded-xl"
    >
      Registrarse
    </button>
    <p class="text-white">
      Ya tengo una cuenta, quiero
      <span class="text-yellow-400 cursor-pointer" @click.prevent="emit('toggle-auth')"
        >iniciar sesion</span
      >
    </p>
  </div>
</template>
