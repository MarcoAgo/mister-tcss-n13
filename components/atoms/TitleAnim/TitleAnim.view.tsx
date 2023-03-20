import { TitleAnimProps } from "./TitleAnim.types"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef } from "react"
import { titleVariant } from "./TitleAnim.variants"

const TitleAnimView: React.FC<TitleAnimProps> = (props) => {
    const { children } = props
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref)

    return (
        <div className="overflow-hidden h-fit w-fit" ref={ref}>
            <AnimatePresence>
                {inView && (
                    <motion.div
                        variants={titleVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default TitleAnimView