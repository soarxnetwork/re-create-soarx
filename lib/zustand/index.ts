import { create } from "zustand";

interface GlobalState {
  isActiveFloatDlc: boolean;
  setIsActiveFloatDlc: (value: boolean) => void;
}

export const useGlobalState = create<GlobalState>((set) => ({
  isActiveFloatDlc: false,
  setIsActiveFloatDlc: (value: boolean) => set({ isActiveFloatDlc: value }),
}));
