import { AnimatedMenuContentSvgProps, MenuHoverItemsEnum } from "../SidebarNavigation.types"
import { motion } from "framer-motion"
import { useEffect } from "react"

const paths = {
    default: ["M8 2L1.68518 25.1543", "M8.02173 2L14.3153 25.1601", "M21 2L14.6852 25.1543", "M21.0217 2L27.3153 25.1601", "M12 16L36 16", ""],
    [MenuHoverItemsEnum.SKILLS]: ["M2 14L12 24", "M2 14L12 4", "M46 14L36 24", "M46 14L36 4", "M27 2L21 27"],
    [MenuHoverItemsEnum.ABOUT]: ["M8 2L1.68518 25.1543", "M8.02173 2L14.3153 25.1601", "M21 2L14.6852 25.1543", "M21.0217 2L27.3153 25.1601", "M12 16L36 16"],
    [MenuHoverItemsEnum.CV]: ["M2 2L2 26", "M2 26L12 26", "M12 2L20.5895 25.7684", "M21 25.7684L29.5895 2.00003", "M2 2L12 2"],
    [MenuHoverItemsEnum.WEBSITE]: ["M2 14L12 24", "M2 14L12 4", "M46 14L36 24", "M46 14L36 4", "M27 2L21 27"],
    [MenuHoverItemsEnum.CONTACTS]: ["M2 2L2 24", "M34 2L34 24", "M4 4L18 13", "M18 13L32 4", "M2 2L34 2", "M2 24L34 24"],
}

const AnimatedMenuContentSvg: React.FC<AnimatedMenuContentSvgProps> = (props) => {
    const { hoverItem } = props
    const item = hoverItem === null ? 'default' : hoverItem

    const transition = {
        duration: 0.4,
        type: 'tween',
        ease: [0.7, 0.02, 0.31, 0.97],
    }

    return (
        <svg width="100%" height="100%" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.default.map((p: string, index: number) => {
                return (
                    <motion.path
                        d={p}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ d: paths[item][index], opacity: 1, origin: 'center', pathLength: 1, transition: { ...transition, delay: 0.2 } }}
                        exit={{ d: paths[item][index], opacity: 0, origin: 'center', pathLength: 0, transition }}
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        style={{ transformOrigin: 'center' }}
                    />
                )
            })}
        </svg>
    )
}

export default AnimatedMenuContentSvg