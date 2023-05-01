import { useScrollContext } from "@/components/templates/ScrollContainer/ScrollContainer.view"
import { useEffect } from "react"
import { StickyContainerProps } from "./StickyContainer.types"
import { motion, useMotionValue } from "framer-motion"

const StickyContainerView: React.FC<StickyContainerProps> = () => {
    const { lenis } = useScrollContext()
    const y = useMotionValue(0)

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const topLimit = 0-lenis.wrapper.height
            const isTop = y.get() <= topLimit
            const isBottom = y.get() >= 0 && e.deltaY < 0

            if (isTop && e.deltaY > 0) {
                y.set(topLimit)
            }

            if ((y.get() <= 0 && !isTop) || (isTop && e.deltaY < 0)) {
                const currentValue = y.get() as number
                const res = currentValue - e.deltaY
                y.set(res)
            }

            if (isBottom && !isTop) {
                y.set(0)
            }
        }

        window.addEventListener('wheel', handleWheel)
        return () => window.removeEventListener('wheel', handleWheel)
    }, [])

    return (
        <motion.div style={{ y, transition: 'all 0.5s ease-out' }} className="fixed top-[100vh] min-h-[150vh] h-auto w-[calc(100vw-5rem)] bg-text pupiu">
            sticky container
        </motion.div>
    )
}

export default StickyContainerView
