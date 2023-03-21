import { ThemeType } from '../store/layout/useLayout'
import useLayout from '@/store/layout/useLayout'
import { useMemo } from 'react'
export enum LightModeColorsEnum {
    darkgray = '#191919',
    superlightgray = '#D9D9D9',
    text = '#7B7B7B',
    white = '#fff',
}

export enum DarkModeColorsEnum {
    darkgray = '#D9D9D9',
    superlightgray = '#191919',
    text = '#191919',
    white = '#000',
}

export enum ColorsEnum {
    DARKGRAY = 'darkgray',
    SUPERLIGHTGRAY = 'superlightgray',
    TEXT = 'text',
    WHITE = 'white',
}

export const getThemeColors = (color: ColorsEnum, theme: ThemeType, inverse?: boolean) => {
    if (inverse) {
        return theme === 'light' ? DarkModeColorsEnum[color] : LightModeColorsEnum[color]
    }

    return theme === 'light' ? LightModeColorsEnum[color] : DarkModeColorsEnum[color]
}

const useThemeColors = (color: ColorsEnum, inverse?: boolean) => {
    const { theme } = useLayout()

    return useMemo(() => getThemeColors(color, theme, inverse), [theme, inverse, color])
}

export default useThemeColors
