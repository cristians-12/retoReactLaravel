import { create } from "zustand";

interface UserStore {
  isLogged: boolean;
  setLogin: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  isLogged: false,
  setLogin: () => set((state) => ({ isLogged: true })),
}));

export default useUserStore;
