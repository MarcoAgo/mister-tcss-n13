"use client"

import { useScrollContext } from '@/components/templates/ScrollContainer/ScrollContainer.view'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SidebarNavigationProps } from './SidebarNavigation.types'

const SidebarNavigationView: React.FC<SidebarNavigationProps> = (props) => {
    const [status, setStatus] = useState<'none' | 'hover' | 'click'>('none')
    const pathCtrl = useAnimationControls()
    const { lenis } = useScrollContext()

    useEffect(() => {
        if (status === 'hover') {
            pathCtrl.start({ d: 'M0 0H66.1539C77.1795 107.667 86 338.8 86 402C86 465.2 77.1795 699 66.1539 808H0V0Z', transition: { duration: 0.7 } })
        }  
        if (status === 'none') {
            pathCtrl.start({ d: 'M0 0H7.69231C8.97436 107.667 10 338.8 10 402C10 465.2 8.97436 699 7.69231 808H0V0Z', transition: { duration: 0.7 } })
        }
        
        if (status === 'click') {
            pathCtrl.start({ d: 'M0 0H1538.46C1794.87 107.667 2000 338.8 2000 402C2000 465.2 1794.87 699 1538.46 808H0V0Z', transition: { duration: 0.7 } })
        }
    }, [status])

    console.log(status)

    return (
        <div className="fixed top-0 left-0 h-screen w-20 bg-superlightgray">
            <div className='absolute top-0 left-0 h-screen'>
                <svg width={lenis?.wrapper?.width} height={lenis?.wrapper?.height} viewBox={`0 0 ${lenis?.wrapper?.width} ${lenis?.wrapper?.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path animate={pathCtrl} d="M0 0H7.69231C8.97436 107.667 10 338.8 10 402C10 465.2 8.97436 699 7.69231 808H0V0Z" fill="#D9D9D9" />
                </svg>
            </div>
            <div className="flex h-screen items-center justify-center">
                <p
                    className='text-darkgray z-10 cursor-pointer text-xl font-bold'
                    onMouseEnter={() => setStatus(prev => prev === 'click' ? prev : 'hover')}
                    onMouseLeave={() => setStatus(prev => prev === 'click' ? prev : 'none')}
                    onClick={() => setStatus(prev => prev === 'click' ? 'none' : prev)}
                >
                    M
                </p>
            </div>
        </div>
    )
}

export default SidebarNavigationView
