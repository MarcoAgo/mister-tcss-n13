import { create } from "zustand"

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