import { useRouter } from "vue-router";

export function useRoutes() {
  const router = useRouter();

  const goToRegisterPage = () => router.push("/register");
  const goToHomePage = ()=> router.push('/')

  return {
    goToRegisterPage,
    goToHomePage
  };
}
