import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  from: string;
  to: string;
};

type Action = {
  setFrom: (from: State["from"]) => void;
  setTo: (to: State["to"]) => void;
  swap: () => void;
};

const useRateStore = create<State & Action>()(
  persist(
    (set) => ({
      from: "USD",
      to: "JPY",
      setFrom: (newFrom) => set({ from: newFrom }),
      setTo: (newTo) => set({ from: newTo }),
      swap: () => set((state) => ({ from: state.to, to: state.from })),
    }),
    {
      name: "rate-storage",
    }
  )
);

export default useRateStore;
