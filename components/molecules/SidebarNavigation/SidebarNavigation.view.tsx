"use client"

import { useScrollContext } from '@/components/templates/ScrollContainer/ScrollContainer.view'
import useThemeColors, { ColorsEnum } from '@/hooks/useThemeColors'
import useMenu from '@/store/menu/useMenu'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SidebarNavigationProps, SidebarStatus, SidebarStatusEnum } from './SidebarNavigation.types'
import { sidebarEnterVariant, sidebarNavigationVariants } from './SidebarNavigation.variants'
import DarkModeButton from './_partial/DarkModeButton'
import MenuButton from './_partial/MenuButton'

const SidebarNavigationView: React.FC<SidebarNavigationProps> = () => {
    const [status, setStatus] = useState<SidebarStatus>(SidebarStatusEnum.NONE)
    const pathCtrl = useAnimationControls()
    const { isOpen, setIsOpen } = useMenu()
    const { lenis } = useScrollContext()
    const pathColor = useThemeColors(ColorsEnum.SUPERLIGHTGRAY, true)

    useEffect(() => {
        if (status === SidebarStatusEnum.HOVER) {
            pathCtrl.start(status)
        }

        if (status === SidebarStatusEnum.NONE) {
            pathCtrl.start(status)
        }

        if (status === SidebarStatusEnum.CLICK) {
            pathCtrl.start(status)
        }
    }, [status])

    useEffect(() => {
        if (lenis) {
            if (isOpen) lenis.stop()
            else lenis.start()
        }
    }, [isOpen, lenis])

    const handleMenuClick = () => {
        setStatus(prev => prev === SidebarStatusEnum.CLICK ? SidebarStatusEnum.NONE : SidebarStatusEnum.CLICK)
        setIsOpen()
    }

    const handleMouseEvent = (evt: SidebarStatus) => {
        setStatus(prev => prev === SidebarStatusEnum.CLICK ? prev : evt)
    }

    return (
        <motion.div className="fixed top-0 left-0 h-screen w-screen z-30" {...sidebarEnterVariant}>
            <div className='absolute top-0 left-0 h-screen w-screen'>
                <svg
                    x="0px"
                    y="0px"
                    width='100%'
                    height='100%'
                    enable-background={`new 0 0 1200 808`}
                    viewBox={`0 0 1200 808`}
                    fill="none"
                    preserveAspectRatio='none'
                >
                    <motion.path
                        width="100%"
                        height="100%"
                        variants={sidebarNavigationVariants}
                        animate={pathCtrl}
                        d="M0 0H7.69231C8.97436 107.667 10 338.8 10 402C10 465.2 8.97436 699 7.69231 808H0V0Z"
                        fill={pathColor}
                    />
                </svg>
            </div>
            <div className="flex h-screen items-center justify-center w-20 dark:bg-superlightgray bg-darkgray flex-col">
                <MenuButton
                    handleMenuClick={handleMenuClick}
                    handleMouseEvent={handleMouseEvent}
                    status={status}
                />
                <DarkModeButton />
            </div>
        </motion.div>
    )
}

export default SidebarNavigationView
