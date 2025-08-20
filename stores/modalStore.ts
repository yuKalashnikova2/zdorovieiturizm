import { create } from "zustand"

interface ModalState {
  isThanks: boolean;
  modalClosed: boolean;
  setIsThanks: (value: boolean) => void
  setModalClosed: (value: boolean) => void
}

export const useModalStore = create<ModalState>((set) => ({
  isThanks: false,
  modalClosed: false,
  setIsThanks: (value) => set({ isThanks: value }),
  setModalClosed: (value) => set({ modalClosed: value }),
}))
