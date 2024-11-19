import { useCounterStore } from "../../store/user/userStore";

export function useTimer() {
  const store = useCounterStore();
  const { logUser } = store;

  const waitTimeLogin = (time: number) => {
    setTimeout(() => {
      logUser();
    }, time * 1000);
  };

  return {
    waitTimeLogin,
  };
}
