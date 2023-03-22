import Text from "@/components/atoms/Text"
import { TextColorEnum, TextTypeEnum } from "@/components/atoms/Text/Text.types"
import { TitleAnim } from "@/components/atoms/TitleAnim"
import useMenu from "@/store/menu/useMenu"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

const menuItems = [
    { label: 'Skills', link: '/skills' },
    { label: 'About', link: '/about' },
    { label: 'CV', link: '/cv' },
    { label: 'This website', link: '/this-website' },
]

const MenuContent: React.FC = () => {
    const { isOpen } = useMenu()

    const renderMenuItems = (item: { label: string, link: string }, index: number) => {
        return (
            <TitleAnim key={`menu-item-index-${index}`}>
                <Link href={item.link}>
                    <div className="flex items-end mt-6 mb-6 px-[10vw]">
                        <Text type={TextTypeEnum.HEADING4} color={TextColorEnum.TEXT} className="font-medium mr-4">
                            0{index + 1}
                        </Text>
                        <Text type={TextTypeEnum.HEADING1} color={TextColorEnum.LIGHT}>{item.label}</Text>
                    </div>
                </Link>
            </TitleAnim>
        )
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="absolute right-0 top-0 h-screen w-[calc(100vw-5rem)]">
                    <div className="w-auto h-screen flex justify-center flex-col">
                        {menuItems.map(renderMenuItems)}
                    </div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default MenuContent