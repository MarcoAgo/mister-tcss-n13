'use client'

import { TitleAnim } from "@/components/atoms/TitleAnim"
import Text from "@/components/atoms/Text"
import { TextColorEnum, TextTypeEnum } from "@/components/atoms/Text/Text.types"
import useMenu from "@/store/menu/useMenu"
import { useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import { motion } from "framer-motion"

function Home() {
    const { isOpen } = useMenu()
    const mainContentCtrl = useAnimationControls()

    useEffect(() => {
        if (isOpen) mainContentCtrl.start({ opacity: 0, transition: { type: 'tween', ease: 'easeOut' } })
        if (!isOpen) mainContentCtrl.start({ opacity: 1, transition: { type: 'tween', ease: 'easeOut', delay: 0.8 } })
    }, [isOpen])

    return (
        <motion.main className="w-full h-screen relative z-40" animate={mainContentCtrl}>
            <div className="flex items-center justify-between gap-[2.5vw] w-full h-full text-superlightgray p-[2.5vw]">
                <div className="w-[calc(100%/3)] h-[calc(100%-5rem)] dark:bg-superlightgray bg-darkgray rounded-[40px]"></div>
                <div className="w-[calc(100%/3)] h-[calc(100%-5rem)] dark:bg-superlightgray bg-darkgray rounded-[40px]"></div>
                <div className="w-[calc(100%/3)] h-[calc(100%-5rem)] dark:bg-superlightgray bg-darkgray rounded-[40px]"></div>
            </div>
        </motion.main>
    )
}

export default Home
