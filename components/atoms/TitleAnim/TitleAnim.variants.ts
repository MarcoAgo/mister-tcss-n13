import { Variants } from "framer-motion";

export const titleVariant: Variants = {
    initial: {
        y: '100%',
        opacity: 0,
        transition: {
            type: 'tween',
            ease: [.7, .02, .31, .97],
            duration: 1.2,
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            ease: [.7, .02, .31, .97],
            duration: 1.2,
            delay: 0.2,
        }
    },
    exit: {
        y: '-200%',
        opacity: 0,
        transition: {
            type: 'tween',
            ease: [.7, .02, .31, .97],
            duration: 1.2,
        }
    },
}