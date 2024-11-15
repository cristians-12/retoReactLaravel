// useAuth composable
import { ref } from "vue";
import { useToast } from "../toast/useToast";
import { useFetch } from "../useFetch";
import { API_URL } from "../../constants/api";

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

  const handleCredentials = (
    passwordVal: string,
    password_confirmation: string,
    emailVal: string
  ) => {
    password.value = passwordVal;
    confirm_password.value = password_confirmation;

    if (password.value == confirm_password.value) {
      email.value = emailVal;
      successToast("Exito, registrandose..");
    } else {
      errorToast("Ambas passwords deben ser iguales");
    }
  };

  const handleRegister = () => {
    fetchData(`${API_URL}/api/users`,{method: 'POST', body:'{}'});
    console.log(data);
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
