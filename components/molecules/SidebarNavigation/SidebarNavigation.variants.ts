import { Variants } from 'framer-motion'

export const sidebarNavigationVariants = {
    none: {
        d: 'M0 0H7.69231C8.97436 107.667 10 338.8 10 402C10 465.2 8.97436 699 7.69231 808H0V0Z',
        transition: {
            duration: 1,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
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
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
}

export const testVariant: Variants = {
    none: {},
    hover: {},
    click: {},
}

export const menuButtonVariantTL = {
    none: {
        x: 0,
        y: 0,
        backgroundColor: ':darkgray:',
        transition: {
            duration: 0.7,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    hover: {
        y: 0,
        x: 7,
        backgroundColor: ':white:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    click: {
        x: 8,
        y: 8,
        backgroundColor: ':darkgray:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
}

export const menuButtonVariantTR = {
    none: {
        x: 0,
        y: 0,
        backgroundColor: ':darkgray:',
        transition: {
            duration: 0.7,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    hover: {
        x: 0,
        y: 8,
        backgroundColor: ':white:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    click: {
        x: -7,
        y: 8,
        backgroundColor: ':darkgray:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
}

export const menuButtonVariantBL = {
    none: {
        x: 0,
        y: 0,
        backgroundColor: ':darkgray:',
        transition: {
            duration: 0.7,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    hover: {
        x: -7,
        y: 0,
        backgroundColor: ':white:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    click: {
        x: -7,
        y: -7,
        backgroundColor: ':darkgray:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
}

export const menuButtonVariantBR = {
    none: {
        x: 0,
        y: 0,
        backgroundColor: ':darkgray:',
        transition: {
            duration: 0.7,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    hover: {
        y: -7,
        x: -1.5,
        backgroundColor: ':white:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    click: {
        x: 8,
        y: -7,
        backgroundColor: ':darkgray:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
}

export const menuButtonLineVariantTop = {
    none: {
        opacity: 1,
        x: 0,
        y: 0,
        backgroundColor: ':darkgray:',
        rotate: 0,
        transition: {
            delay: 0.2,
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    hover: {
        x: 0,
        y: 8,
        opacity: 1,
        backgroundColor: ':white:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    click: {
        opacity: 1,
        rotate: '45deg',
        y: 7.5,
        x: 0,
        width: 24,
        backgroundColor: ':darkgray:',
        transition: {
            delay: 0.2,
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
}

export const menuButtonLineVariantBottom = {
    none: {
        x: 0,
        opacity: 1,
        y: 0,
        backgroundColor: ':darkgray:',
        rotate: 0,
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
            delay: 0.2,
        },
    },
    hover: {
        x: 0,
        y: -7,
        opacity: 1,
        rotate: '-90deg',
        backgroundColor: ':white:',
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
    click: {
        opacity: 1,
        backgroundColor: ':darkgray:',
        rotate: '-45deg',
        y: -8,
        x: 0,
        width: 24,
        transition: {
            delay: 0.2,
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        },
    },
}

export const sidebarEnterVariant = {
    initial: {
        x: '-100%',
    },
    animate: {
        x: 0,
    },
    transition: {
        duration: 0.8,
        type: 'tween',
        ease: [0.7, 0.02, 0.31, 0.97],
    },
}

export const darkModeButtonVariant = {
    initial: {
        x: -32,
        opacity: 0,
        transition: {
            delay: 0.8,
            duration: 0.3,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        }
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.6,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        }
    },
    light: {
        d: 'M15.9995 0C7.1774 0 0 7.17721 0 15.9995C0 24.8217 7.17759 31.9991 15.9995 31.9991C24.8215 31.9991 32 24.8215 32 15.9995C32 7.17759 24.8221 0 15.9995 0ZM15.9995 29.8921C15.8077 29.8921 15.6167 29.8851 15.426 29.8778C8.5 29.8778 2 22.2913 2 15.9993C2 9.70729 7.5 2.12082 15.426 2.12082C15.6167 2.11274 15.8077 2.10649 15.9995 2.10649C23.6602 2.10649 29.8931 8.33869 29.8931 15.9991C29.8931 23.6595 23.6605 29.8921 15.9995 29.8921Z',
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        }
    },
    dark: {
        d: 'M16.4995 0C7.6774 0 0.5 7.17721 0.5 15.9995C0.5 24.8217 7.67759 31.9991 16.4995 31.9991C25.3215 31.9991 32.5 24.8215 32.5 15.9995C32.5 7.17759 25.3221 0 16.4995 0ZM16.4995 29.8921C16.3077 29.8921 16.1167 29.8851 15.926 29.8778C21.4296 27.673 25.318 22.2913 25.318 15.9993C25.318 9.70729 21.4296 4.32558 15.926 2.12082C16.1167 2.11274 16.3077 2.10649 16.4995 2.10649C24.1602 2.10649 30.3931 8.33869 30.3931 15.9991C30.3931 23.6595 24.1605 29.8921 16.4995 29.8921Z',
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: [0.7, 0.02, 0.31, 0.97],
        }
    },
}
