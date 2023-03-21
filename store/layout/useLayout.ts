import { create } from "zustand"

export type ThemeType = 'dark' | 'light'

export type LayoutStore = {
    theme: ThemeType
    setTheme: (key: ThemeType) => void
}

const useLayout = create<LayoutStore>(set => ({
    theme: 'dark',
    setTheme: (theme: ThemeType) => set((state: LayoutStore) => ({
        ...state,
        theme,
    }))
}))

export default useLayout