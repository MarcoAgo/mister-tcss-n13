import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main style={{ width: '100vw', height: '100vh' }}>
            <div className="flex items-center justify-center h-full w-full">
                <h1 className="text-3xl font-bold">
                    About
                </h1>
            </div>
        </main>
    )
}
