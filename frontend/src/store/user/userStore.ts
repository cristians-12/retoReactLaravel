import { create } from "zustand";
// import Cookie from "js-cookie";

interface UserState {
  logged: boolean;
  token: string | null;
  logUser: (tokenValue: string) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  logged: false,
  token: null,
  logUser: (tokenValue: string) => {
    // const token = Cookie.get('auth_token');
    // console.log(tokenValue);
    set({ logged: true, token: tokenValue });
  },
  logout: () => set({ logged: false }),
}));

export default useUserStore;
