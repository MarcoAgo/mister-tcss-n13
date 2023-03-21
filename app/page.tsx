'use client'

import { TitleAnim } from "@/components/atoms/TitleAnim"
import Text from "@/components/atoms/Text"
import { TextColorEnum, TextTypeEnum } from "@/components/atoms/Text/Text.types"

function Home() {
    return (
        <main className="w-full h-screen relative z-40">
            <div className="flex items-center justify-center w-full h-full text-superlightgray">
                <TitleAnim>
                    <Text as="h1" type={TextTypeEnum.HEADING1} color={TextColorEnum.DARK}>
                        Hi bitches!
                    </Text>
                </TitleAnim>
            </div>
        </main>
    )
}

export default Home
