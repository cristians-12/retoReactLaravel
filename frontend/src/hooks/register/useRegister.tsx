import useFetch from "../fetch/useFetch";
import { API_URL } from "../../constants/api";
import useToast from "../toast/useToast";
import { useEffect } from "react";
import useUserStore from "../../store/user/userStore";

const useRegister = () => {
  const { fetchRequest, data } = useFetch();
  const { successToast, errorToast } = useToast();
  const { logUser } = useUserStore();

  useEffect(() => {
    if (data) {
      if (data.success) {
        successToast(data.message);
        if (data.auth_token) {
          logUser(data.auth_token);
        } else {
          console.log("no token found");
        }
      } else {
        errorToast(data.message);
      }
    }
  }, [data]);

  const handleRegister = async (
    name: string,
    email: string,
    password: string
  ) => {
    if (name === "" || email === "" || password === "") {
      errorToast("Todos los campos deben estar llenos");
      return;
    }

    await fetchRequest(`${API_URL}/api/users`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };

  const handleLogin = async (email: string, password: string) => {
    if (email === "" || password === "") {
      errorToast("Todos los campos deben estar llenos");
      return;
    }
    await fetchRequest(`${API_URL}/api/users/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };

  return {
    handleRegister,
    handleLogin,
  };
};

export default useRegister;
