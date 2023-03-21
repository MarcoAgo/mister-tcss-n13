"use client"

import './globals.output.css'
import SidebarNavigation from '@/components/molecules/SidebarNavigation'
import ScrollContainer from '@/components/templates/ScrollContainer'
import useMenu from '@/store/menu/useMenu'
import classNames from 'classnames'
import useLayout from '@/store/layout/useLayout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { isOpen } = useMenu()
    const { theme } = useLayout()

    const classname = classNames({
        'z-5 relative': !isOpen,
        'z-0 relative': isOpen
    })

    return (
        <html className={theme}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="overflow-x-hidden flex justify-end w-screen dark:bg-darkgray bg-superlightgray" style={{
                transition: 'all 0.5s ease-in-out'
            }}>
                <ScrollContainer>
                    <SidebarNavigation />
                    <div className={classname}>
                        {children}
                    </div>
                </ScrollContainer>
            </body>
        </html>
    )
}
