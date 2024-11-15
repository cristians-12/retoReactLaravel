// useAuth composable
import { ref } from "vue";
import { useToast } from "../toast/useToast";
import { useFetch } from "../useFetch";
import { API_URL } from "../../constants/api";
import { User } from "../../types/user/user.type";

export function useAuth() {
  const { fetchData, data } = useFetch();

  const authButton = ref(true);
  const email = ref("");
  const password = ref("");
  const confirm_password = ref("");

  const { errorToast, successToast } = useToast();

  const toggleAuthButton = () => {
    authButton.value = !authButton.value;
  };
  const handleRegister = (data: User) => {
    fetchData(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  const handleCredentials = (
    passwordVal: string,
    password_confirmation: string,
    emailVal: string
  ) => {
    password.value = passwordVal;
    confirm_password.value = password_confirmation;

    if (password.value == confirm_password.value) {
      handleRegister({
        name: "prueba",
        password: passwordVal,
        email: emailVal,
      });
      successToast("Exito en el registro!");
    } else {
      errorToast("Ambas passwords deben ser iguales");
    }
  };

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
