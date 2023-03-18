import { MenuButtonProps, SidebarStatusEnum } from "../SidebarNavigation.types";
import { motion } from "framer-motion";
import { menuButtonLineVariantBottom, menuButtonLineVariantTop, menuButtonVariantBL, menuButtonVariantBR, menuButtonVariantTL, menuButtonVariantTR, testVariant } from "../SidebarNavigation.variants";

const MenuButton: React.FC<MenuButtonProps> = (props) => {
    const { handleMouseEvent, handleMenuClick, status } = props

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
                variants={menuButtonVariantTL}
                animate={status}
                className='absolute top-0 left-0 bg-darkgray h-2 w-2 z-20 rounded-3xl'
            />
            <motion.div
                variants={menuButtonVariantTR}
                animate={status}
                className='absolute top-0 right-0 bg-darkgray h-2 w-2 z-20 rounded-3xl'
            />
            <motion.div
                variants={menuButtonVariantBL}
                animate={status}
                className='absolute bottom-0 right-0 bg-darkgray h-2 w-2 z-20 rounded-3xl'
            />
            <motion.div
                variants={menuButtonVariantBR}
                animate={status}
                className='absolute bottom-0 left-0 bg-darkgray h-2 w-2 z-20 rounded-3xl'
            />
            <motion.div
                variants={menuButtonLineVariantTop}
                animate={status}
                className='w-7 h-2 rounded-3xl absolute top-0 bg-darkgray origin-center'
            />
            <motion.div
                variants={menuButtonLineVariantBottom}
                animate={status}
                className='w-7 h-2 rounded-3xl absolute bottom-0 bg-darkgray origin-center'
            />
        </motion.div>
    )
}

export default MenuButton