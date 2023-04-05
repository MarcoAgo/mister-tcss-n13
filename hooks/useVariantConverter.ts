import { ThemeType } from './../store/layout/useLayout';
import { getThemeColors } from '@/hooks/useThemeColors';
import { ColorsEnum } from './useThemeColors';
import { useMemo } from 'react'
import { Variants, Variant } from 'framer-motion'
import useLayout from '@/store/layout/useLayout'

export const variantConverterFactory = (variants: Variants, theme: ThemeType): any => {
    const variantsKeys = Object.keys(variants)

    if (variantsKeys.length > 0) {
        let final = {}
        variantsKeys.forEach((key: any) => {
            const regExp = new RegExp(/(?<=:)(.*?)(?=:|\n)/m)
            const variantKeys = Object.keys(variants[key])
            let res: Variant = {}

            variantKeys.forEach((v: any) => {
                // @ts-ignore
                const value = variants[key][v]
                if (regExp.test(value)) {
                    const color: ColorsEnum = value.split(':')[1]
                    const convertedColor = getThemeColors(color, theme, true)
                    res = { ...res, [v]: convertedColor }
                } else {
                    res = { ...res, [v]: value }
                }
            })
            final = { ...final, [key]: res }
        })
        return final
    }
}

const useVariantConverter = (variants: Variants) => {
    const { theme } = useLayout()

    return useMemo(() => variantConverterFactory(variants, theme), [theme])
}

export default useVariantConverter
