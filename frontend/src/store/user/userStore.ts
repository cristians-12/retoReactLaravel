import { create } from "zustand";

interface UserState {
  logged: boolean;
  logUser: () => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  logged: false,
  logUser: () => set({ logged: true }),
  logout: () => set({ logged: false }),
}));

export default useUserStore;
