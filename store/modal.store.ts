import { create } from "zustand";

type ModalType = "delete" | "edit" | "add" | null;

interface ModalState<T = any> {
  isOpen: boolean;
  type: ModalType;
  data?: T | null;

  openModal: (type: ModalType, data?: T) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  data: null,

  openModal: (type, data = null) =>
    set({
      isOpen: true,
      type,
      data,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      type: null,
      data: null,
    }),
}));

export default useModalStore;
