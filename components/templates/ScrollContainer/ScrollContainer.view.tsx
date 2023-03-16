'use client'

import Lenis from "@studio-freight/lenis"
import { useAnimationFrame } from "framer-motion"
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react"

const ScrollContext = createContext<{ lenis: Lenis }>({ lenis: {} as unknown as Lenis })

const ScrollContainerView: React.FC<{ children: ReactNode }> = ({ children }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [lenis, setLenis] = useState<Lenis | null>(null)

    useEffect(() => {
        const lenisInit = new Lenis({
            // wrapper: wrapperRef.current,
            // content: wrapperRef.current,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        console.log('QUAAAA')

        setLenis(lenisInit)
    }, [wrapperRef.current])

    useEffect(() => {
        if (lenis) {
            lenis.on('scroll', (e: any) => {
                console.log('scrolling', e)
            })
        }
    }, [lenis])

    useAnimationFrame((time) => {
        if (lenis) {
            lenis.raf(time)
        }
    })

    console.log('lenis', lenis)

    return (
        <ScrollContext.Provider value={{ lenis: lenis as Lenis }}>
            <div style={{ width: 'calc(100% - 5rem)', height: 'fit-content' }} ref={wrapperRef}>
                {children}
            </div>
        </ScrollContext.Provider>
    )
}

export const useScrollContext = () => useContext(ScrollContext)

export default ScrollContainerView