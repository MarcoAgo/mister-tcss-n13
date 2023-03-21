import { MenuButtonProps, SidebarStatusEnum } from "../SidebarNavigation.types";
import { motion } from "framer-motion";
import { menuButtonLineVariantBottom, menuButtonLineVariantTop, menuButtonVariantBL, menuButtonVariantBR, menuButtonVariantTL, menuButtonVariantTR, testVariant } from "../SidebarNavigation.variants";
import useLayout from "@/store/layout/useLayout";
import { variantConverterFactory } from "@/hooks/useVariantConverter";

const MenuButton: React.FC<MenuButtonProps> = (props) => {
    const { handleMouseEvent, handleMenuClick, status } = props
    const { theme } = useLayout()

    return (
        <motion.div
            className='z-10 cursor-pointer relative w-7 h-7'
            onMouseEnter={() => handleMouseEvent(SidebarStatusEnum.HOVER)}
            onMouseLeave={() => handleMouseEvent(SidebarStatusEnum.NONE)}
            onClick={handleMenuClick}
            variants={testVariant}
            animate={status}
        >
            <motion.div
                variants={variantConverterFactory(menuButtonVariantTL, theme)}
                animate={status}
                className='absolute top-0 left-0 dark:bg-darkgray bg-superlightgray h-2 w-2 z-20 rounded-3xl'
            />
            <motion.div
                variants={variantConverterFactory(menuButtonVariantTR, theme)}
                animate={status}
                className='absolute top-0 right-0 dark:bg-darkgray bg-superlightgray h-2 w-2 z-20 rounded-3xl'
            />
            <motion.div
                variants={variantConverterFactory(menuButtonVariantBL, theme)}
                animate={status}
                className='absolute bottom-0 right-0 dark:bg-darkgray bg-superlightgrayh-2 w-2 z-20 rounded-3xl'
            />
            <motion.div
                variants={variantConverterFactory(menuButtonVariantBR, theme)}
                animate={status}
                className='absolute bottom-0 left-0 dark:bg-darkgray bg-superlightgray h-2 w-2 z-20 rounded-3xl'
            />
            <motion.div
                variants={variantConverterFactory(menuButtonLineVariantTop, theme)}
                animate={status}
                className='w-7 h-2 rounded-3xl absolute top-0 dark:bg-darkgray bg-superlightgray origin-center'
            />
            <motion.div
                variants={variantConverterFactory(menuButtonLineVariantBottom, theme)}
                animate={status}
                className='w-7 h-2 rounded-3xl absolute bottom-0 dark:bg-darkgray bg-superlightgray origin-center'
            />
        </motion.div>
    )
}

export default MenuButton