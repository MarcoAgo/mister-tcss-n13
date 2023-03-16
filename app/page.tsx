'use client'

import { useScrollContext } from "@/components/templates/ScrollContainer/ScrollContainer.view"

function Home() {
    const { lenis } = useScrollContext()

    console.log(lenis)

    return (
        <main className="w-auto h-auto relative">
            <div>
                <p>ciao</p>
                <div style={{ height: '150vh' }}></div>
                <p>ciao2</p>
            </div>
        </main>
    )
}

export default Home
