<script setup lang="ts">
import { Ref, ref } from "vue";
import { addIcons } from "oh-vue-icons";
import { IoEyeOutline } from "oh-vue-icons/icons";

addIcons(IoEyeOutline);

const emit = defineEmits<{
  (e: "toggle-auth"): void;
  (
    e: "handleCredentials",
    password: string,
    confirm_pass: string,
    email: string,
    name: string
  ): void;
}>();
const email = ref("");
const password = ref("");
const confirm_pass = ref("");
const name = ref("");

const watch: Ref<boolean> = ref(false);
const watchConfirmation: Ref<boolean> = ref(false);
const togglePasswordVisibility = () => {
  watch.value = !watch.value;
};
const togglePasswordConfVisibility = () => {
  watchConfirmation.value = !watchConfirmation.value;
};
</script>

<template>
  <div class="bg-orange-600 p-5 rounded-xl flex flex-col gap-7">
    <input
      type="text"
      class="px-4 py-2 rounded-lg"
      placeholder="Ingresa tu nombre"
      v-model="name"
    />
    <input
      type="email"
      class="px-4 py-2 rounded-lg"
      placeholder="Ingresa tu e-mail"
      v-model="email"
    />
    <div class="relative w-full">
      <input
        :type="watch ? 'text' : 'password'"
        class="px-4 py-2 rounded-lg w-full"
        placeholder="Ingresa tu password"
        v-model="password"
      />
      <v-icon
        v-if="watch"
        @click="togglePasswordVisibility"
        name="bi-eye-slash-fill"
        scale="1.5"
        class="absolute top-2 right-3 text-orange-600"
      />
      <v-icon
        v-else
        @click="togglePasswordVisibility"
        name="bi-eye-fill"
        scale="1.5"
        class="absolute top-2 right-3 text-orange-600"
      />
    </div>
    <div class="relative">
      <input
        :type="watchConfirmation ? 'text' : 'password'"
        class="px-4 py-2 rounded-lg w-full"
        placeholder="Confirma tu password"
        v-model="confirm_pass"
      />
      <v-icon
        v-if="watchConfirmation"
        @click="togglePasswordConfVisibility"
        name="bi-eye-slash-fill"
        scale="1.5"
        class="absolute top-2 right-3 text-orange-600"
      />
      <v-icon
        v-else
        name="bi-eye-fill"
        @click="togglePasswordConfVisibility"
        scale="1.5"
        class="absolute top-2 right-3 text-orange-600"
      />
    </div>
    <button
      @click="emit('handleCredentials', password, confirm_pass, email, name)"
      class="bg-orange-300 text-yellow-900 py-2 rounded-xl"
    >
      Registrarse
    </button>

    <p class="text-white">
      Ya tengo una cuenta, quiero
      <span
        class="text-yellow-400 cursor-pointer"
        @click.prevent="emit('toggle-auth')"
        >iniciar sesion</span
      >
    </p>
  </div>
</template>
