import { AnimatedMenuContentSvgProps, MenuHoverItemsEnum } from "../SidebarNavigation.types"
import { motion } from "framer-motion"
import { useEffect } from "react"

const paths = {
    default: ["M2 2L2 26","M22 2L22 26","M32 2L32 26","M42 2L42 26","M12 2L12 26"],
    [MenuHoverItemsEnum.SKILLS]: ["M2 14L12 24","M2 14L12 4","M46 14L36 24","M46 14L36 4","M27 2L21 27"],
    [MenuHoverItemsEnum.ABOUT]: ["M2 14L12 24","M2 14L12 4","M46 14L36 24","M46 14L36 4","M27 2L21 27"],
    [MenuHoverItemsEnum.CONTACTS]: ["M2 14L12 24","M2 14L12 4","M46 14L36 24","M46 14L36 4","M27 2L21 27"],
    [MenuHoverItemsEnum.CV]: ["M2 14L12 24","M2 14L12 4","M46 14L36 24","M46 14L36 4","M27 2L21 27"],
    [MenuHoverItemsEnum.WEBSITE]: ["M2 14L12 24","M2 14L12 4","M46 14L36 24","M46 14L36 4","M27 2L21 27"],
}

const AnimatedMenuContentSvg: React.FC<AnimatedMenuContentSvgProps> = (props) => {
    const { hoverItem } = props
    const item = hoverItem === null ? 'default' : hoverItem

    return (
        <svg width="100%" height="100%" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.default.map((p: string, index: number) => {
                return <motion.path d={p} animate={{ d: paths[item][index] }} stroke="black" stroke-width="3" stroke-linecap="round" />
            })}
        </svg>
    )
}

export default AnimatedMenuContentSvg