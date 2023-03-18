import { Variants } from "framer-motion"

export const sidebarNavigationVariants = {
    none: {
        d: 'M0 0H7.69231C8.97436 107.667 10 338.8 10 402C10 465.2 8.97436 699 7.69231 808H0V0Z', 
        transition: { 
            duration: 1, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    hover: {
        d: 'M0 0H66.1539C77.1795 107.667 86 338.8 86 402C86 465.2 77.1795 699 66.1539 808H0V0Z',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    click: {
        d: 'M0 0H1677.5C1823 0 1961 151.5 1961 402C1961 669 1802.5 808 1677.5 808H0V0Z', 
        transition: { 
            duration: 1, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    }
}

export const testVariant: Variants = {
    none: {
    },
    hover: {
    },
    click: {
    }
}

export const menuButtonVariantTL = {
    none: {
        x: 0,
        y: 0,
        backgroundColor: '#191919',
        transition: { 
            duration: 0.7, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    hover: {
        y: 0,
        x: 7,
        backgroundColor: '#FFFFFF',
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    click: {
        x: 15,
        y: 0,
        backgroundColor: '#838383',
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    }
}

export const menuButtonVariantTR = {
    none: {
        x: 0,
        y: 0,
        backgroundColor: '#191919',
        transition: { 
            duration: 0.7, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    hover: {
        x: 0,
        y: 7,
        backgroundColor: '#FFFFFF',
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    click: {
        x: 0,
        y: 15,
        backgroundColor: '#838383',
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    }
}

export const menuButtonVariantBL = {
    none: {
        x: 0,
        y: 0,
        backgroundColor: '#191919',
        transition: { 
            duration: 0.7, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    hover: {
        x: -7,
        y: 0,
        backgroundColor: '#FFFFFF',
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    click: {
        x: -15,
        y: 0,
        backgroundColor: '#838383',
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    }
}

export const menuButtonVariantBR = {
    none: {
        x: 0,
        y: 0,
        backgroundColor: '#191919',
        transition: { 
            duration: 0.7, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    hover: {
        y: -7,
        x: 0,
        backgroundColor: '#FFFFFF',
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    click: {
        x: 0,
        y: -15,
        backgroundColor: '#838383',
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    }
}

export const menuButtonLineVariantTop = {
    none: {
        opacity: 1,
        x: 0,
        transition: { 
            delay: 0.2,
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    hover: {
        width: 8,
        x: 7,
        opacity: 0,
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    click: {
        opacity: 1,
        rotate: '45deg',
        y: 9,
        x: -0.5,
        width: 25,
        backgroundColor: '#838383',
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    }
}

export const menuButtonLineVariantBottom = {
    none: {
        x: 0,
        opacity: 1,
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] ,
            delay: 0.2
        }
    },
    hover: {
        width: 8,
        x: 7,
        opacity: 0,
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    },
    click: {
        opacity: 1,
        backgroundColor: '#838383',
        rotate: '-45deg',
        y: -9,
        x: -0.5,
        width: 25,
        transition: { 
            duration: 0.4, 
            type: 'tween', 
            ease: [.7, .02, .31, .97] 
        }
    }
}
