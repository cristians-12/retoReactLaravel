import { create } from "zustand";

interface ReloadInterface {
  reload: boolean;
  changeReload: () => void;
}

const useReloadStore = create<ReloadInterface>((set) => ({
  reload: false,
  changeReload: () => set((state) => ({ reload: !state.reload })),
}));

export default useReloadStore;
