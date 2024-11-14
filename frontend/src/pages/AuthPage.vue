<script setup lang="ts">
import RegisterForm from "../components/auth/RegisterForm.vue";
import NavBar from "../components/NavBar.vue";
import LoginForm from "../components/auth/LoginForm.vue";
import { useAuth } from "../composables/auth/useAuth";
import { useRouter } from "vue-router";
import { watch } from "vue";

const {
  authButton,
  confirm_password,
  email,
  password,
  toggleAuthButton,
  handleCredentials,
} = useAuth();
</script>

<template>
  <div>
    <NavBar />
    <div
      class="pt-[100px] flex flex-col justify-center items-center min-h-[100vh]"
    >
      <RegisterForm
        v-if="authButton"
        @toggle-auth="toggleAuthButton"
        @handleCredentials="handleCredentials"
      />
      <LoginForm v-else @toggle-auth="toggleAuthButton" />
    </div>
  </div>
</template>
