// useAuth composable
import { ref } from "vue";

export function useAuth() {
  const authButton = ref(false);
  const email = ref("");
  const password = ref("");
  const confirm_password = ref("");

  const toggleAuthButton = () => {
    authButton.value = !authButton.value;
  };

  const handleCredentials = (
    passwordVal: string,
    password_confirmation: string,
    emailVal: string
  ) => {
    password.value = passwordVal;
    confirm_password.value = password_confirmation;

    if (password.value == confirm_password.value) {
      email.value = emailVal;
      alert("Las contraseñas deben ser iguales");
    } else {
      alert("Siga");
    }
  };

  return {
    authButton,
    email,
    password,
    confirm_password,
    toggleAuthButton,
    handleCredentials,
  };
}
