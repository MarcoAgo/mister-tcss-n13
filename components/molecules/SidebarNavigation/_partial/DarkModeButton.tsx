import useThemeColors, { ColorsEnum } from "@/hooks/useThemeColors"
import { variantConverterFactory } from "@/hooks/useVariantConverter"
import useLayout from "@/store/layout/useLayout"
import { useAnimationControls, motion } from "framer-motion"
import { useEffect } from "react"
import { darkModeButtonVariant } from "../SidebarNavigation.variants"

const DarkModeButton: React.FC = (props) => {
    const pathCtrl = useAnimationControls()
    const { theme, setTheme } = useLayout()
    const pathColor = useThemeColors(ColorsEnum.SUPERLIGHTGRAY)

    const handleClick = async () => {
        await pathCtrl.start(theme)
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        void pathCtrl.start('enter')
    }, [])

    return (
        <button onClick={handleClick} className="absolute bottom-8">
            <svg width="32" height="32" viewBox="-4 -4 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    variants={variantConverterFactory(darkModeButtonVariant, theme)}
                    initial="initial"
                    animate={pathCtrl}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    stroke={pathColor}
                    strokeWidth={1.5}
                    d="M15.9995 0C7.1774 0 0 7.17721 0 15.9995C0 24.8217 7.17759 31.9991 15.9995 31.9991C24.8215 31.9991 32 24.8215 32 15.9995C32 7.17759 24.8221 0 15.9995 0ZM15.9995 29.8921C15.8077 29.8921 15.6167 29.8851 15.426 29.8778C8.5 29.8778 2 22.2913 2 15.9993C2 9.70729 7.5 2.12082 15.426 2.12082C15.6167 2.11274 15.8077 2.10649 15.9995 2.10649C23.6602 2.10649 29.8931 8.33869 29.8931 15.9991C29.8931 23.6595 23.6605 29.8921 15.9995 29.8921Z"
                    fill={pathColor}
                />
            </svg>
        </button>
    )
}

export default DarkModeButton