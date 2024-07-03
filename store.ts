import { create } from "zustand";

export interface IState {
  isLoadingNum: number;
  setIsLoading: () => void;
}

const useStore = create<IState>((set) => ({
  isLoadingNum: 0,
  setIsLoading: () => {
    setTimeout(() =>
      set((state) => ({ isLoadingNum: state.isLoadingNum + 1 }))
    );
  },
}));

export default useStore;
