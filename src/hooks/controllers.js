import { create } from "zustand";

export const useProductModal = create((set) => ({
  isOpen: false,
  currentProduct: {},
  onOpen: (product) =>
    set(() => {
      return {
        currentProduct: product,
        isOpen: true,
      };
    }),
  onClose: () =>
    set(() => {
      return {
        currentProduct: {},
        isOpen: false,
      };
    }),
}));

export const useSearchDrawer = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const useCartSidebar = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
