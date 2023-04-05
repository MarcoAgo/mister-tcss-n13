import Text from "@/components/atoms/Text"
import { TextColorEnum, TextTypeEnum } from "@/components/atoms/Text/Text.types"
import { TitleAnim } from "@/components/atoms/TitleAnim"
import useMenu from "@/store/menu/useMenu"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { MenuHoverItemsEnum } from "../SidebarNavigation.types"
import AnimatedMenuContentSvg from "./AnimatedMenuContentSvg"

const menuItems = [
    { label: 'Skills', link: '/skills', id: MenuHoverItemsEnum.SKILLS },
    { label: 'About', link: '/about', id: MenuHoverItemsEnum.ABOUT },
    { label: 'CV', link: '/cv', id: MenuHoverItemsEnum.CV },
    { label: 'Contacts', link: '/contacts', id: MenuHoverItemsEnum.CONTACTS },
]

const MenuContent: React.FC = () => {
    const { isOpen } = useMenu()
    const [hover, setHover] = useState<MenuHoverItemsEnum | null>(null)

    const renderMenuItems = (item: { label: string, link: string, id: MenuHoverItemsEnum }, index: number) => {
        return (
            <TitleAnim key={`menu-item-index-${index}`}>
                <Link
                    href={item.link}
                    onMouseEnter={() => setHover(item.id)}
                    onMouseLeave={() => setHover(null)}
                >
                    <div className="flex items-end mt-6 mb-6 px-[10vw]">
                        <Text type={TextTypeEnum.HEADING4} color={TextColorEnum.TEXT} className="font-medium mr-4">
                            0{index + 1}
                        </Text>
                        <Text type={TextTypeEnum.HEADING1} color={TextColorEnum.LIGHT} className="font-bold">{item.label}</Text>
                    </div>
                </Link>
            </TitleAnim>
        )
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="absolute right-0 top-0 h-screen w-[calc(100vw-5rem)]">
                    <div className="flex items-center h-screen">
                        <div className="w-auto h-screen flex justify-center flex-col">
                            {menuItems.map(renderMenuItems)}
                        </div>
                        <div className="w-40 h-32">
                            <AnimatedMenuContentSvg hoverItem={hover} />
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default MenuContent