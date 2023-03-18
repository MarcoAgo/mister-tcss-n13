'use client'

import { useScrollContext } from "@/components/templates/ScrollContainer/ScrollContainer.view"

function Home() {
    const { lenis } = useScrollContext()

    console.log(lenis)

    return (
        <main className="w-auto h-auto relative z-40">
            
        </main>
    )
}

export default Home
