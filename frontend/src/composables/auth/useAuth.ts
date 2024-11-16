// useAuth composable
import { Ref, ref, watch } from "vue";
import { useToast } from "../toast/useToast";
import { useFetch } from "../useFetch";
import { API_URL } from "../../constants/api";
import { User } from "../../types/user/user.type";
import { useCounterStore } from "../../store/user/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

export function useAuth() {
  const { fetchData, data } = useFetch();

  const authButton: Ref<boolean> = ref(true);
  const email: Ref<string> = ref("");
  const password: Ref<string> = ref("");
  const confirm_password: Ref<string> = ref("");

  const { errorToast, successToast } = useToast();

  const router = useRouter();

  const store = useCounterStore();
  const { isLogged } = storeToRefs(store);
  const { logUser } = store;

  const toggleAuthButton = () => {
    authButton.value = !authButton.value;
  };

  // Funcion encargada de hacer solicitud para registrar al usuario
  const handleRegister = (data: User) => {
    fetchData(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  // Funcion encargada de manejar las credenciales de usuarios y verificar si ambas contrasenias son iguales
  const handleCredentials = (
    passwordVal: string,
    password_confirmation: string,
    emailVal: string,
    nameVal: string
  ) => {
    password.value = passwordVal;
    confirm_password.value = password_confirmation;

    if (password.value == confirm_password.value) {
      try {
        handleRegister({
          name: nameVal,
          password: passwordVal,
          email: emailVal,
        });
        successToast("Exito en el registro!");
        logUser();
      } catch (error) {}
    } else {
      errorToast("Ambas passwords deben ser iguales");
    }
  };

  watch(isLogged, (newVal) => {
    if (newVal) {
      router.push("/");
      console.log("El usuario ha iniciado sesión");
    }
  });

  return {
    authButton,
    email,
    password,
    confirm_password,
    toggleAuthButton,
    handleCredentials,
    handleRegister,
  };
}
