import { TitleAnimProps } from "./TitleAnim.types"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef } from "react"
import { titleVariant } from "./TitleAnim.variants"

const TitleAnimView: React.FC<TitleAnimProps> = (props) => {
    const { children } = props
    const ref = useRef<HTMLDivElement>(null)

    return (
        <div className="overflow-hidden h-fit w-fit" ref={ref}>
            <motion.div
                variants={titleVariant}
                initial="initial"
                animate="animate"
                whileInView="animate"
                exit="exit"
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default TitleAnimView