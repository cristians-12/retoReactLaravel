// useAuth composable
import { Ref, ref, watch } from "vue";
import { useToast } from "../toast/useToast";
import { useFetch } from "../useFetch";
import { API_URL } from "../../constants/api";
import { User } from "../../types/user/user.type";
import { useCounterStore } from "../../store/user/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useTimer } from "../timer/useTimer";

export function useAuth() {
  const { fetchData, data } = useFetch();

  const authButton: Ref<boolean> = ref(true);
  const email: Ref<string> = ref("");
  const password: Ref<string> = ref("");
  const confirm_password: Ref<string> = ref("");

  const { errorToast, successToast } = useToast();
  const { waitTimeLogin } = useTimer();
  const router = useRouter();
  const store = useCounterStore();

  const { isLogged } = storeToRefs(store);

  const toggleAuthButton = () => {
    authButton.value = !authButton.value;
  };

  // Funcion encargada de hacer solicitud para registrar al usuario
  const handleRegister = async (data: User) => {
    await fetchData(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  // Funcion encargada de manejar las credenciales de usuarios y verificar si ambas contrasenias son iguales
  const handleCredentials = async (
    passwordVal: string,
    password_confirmation: string,
    emailVal: string,
    nameVal: string
  ) => {
    password.value = passwordVal;
    confirm_password.value = password_confirmation;

    if (password.value == confirm_password.value) {
      try {
        await handleRegister({
          name: nameVal,
          password: passwordVal,
          email: emailVal,
        });

        if (data.value) {
          if (data.value?.success && data.value.message) {
            successToast(data.value.message);
            waitTimeLogin(3);
          } else {
            errorToast("There was an error..");
          }
        }
      } catch (error) {}
    } else {
      errorToast("Ambas passwords deben ser iguales");
    }
  };

  // Funcion encargada de logear usuario
  const handleLogin = async (datos: User) => {
    try {
      await fetchData(`${API_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (data.value) {
        if (data.value.success === true && data.value.message) {
          successToast(data.value.message);
          waitTimeLogin(3);
        } else if (data.value.message && data.value.success === false) {
          errorToast(data.value.message);
        }
      }
    } catch (error) {
      console.log(error);
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
    handleLogin,
  };
}
