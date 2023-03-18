import { create, StateCreator, StoreApi, UseBoundStore } from "zustand"

export type UseMenuStore = {
    isOpen: boolean
    setIsOpen: () => void
}

const useMenu = create<UseMenuStore>((set) => ({
    isOpen: false,
    setIsOpen: () => set((state) => ({
        ...state,
        isOpen: !state.isOpen
    }))
}))

export default useMenu