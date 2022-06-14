import { ReactNode, RefObject } from "react"
import tailt from "tailt"
import { MenuButton } from "./MenuButton"
import { NavBar } from "./NavBar"
import { SocialButtons } from "./SocialButtons"

export const TopBar = ({children}: {children: ReactNode}) => (
    <HeaderWrapper>
        <Header>
            {children}
        </Header>
    </HeaderWrapper>
)

const HeaderWrapper = tailt.div`
    sticky top-0 left-0 z-20
    flex justify-center
    w-full
    px-3 py-3 sm:px-10 md:px-14
    select-none
`
const Header = tailt.header`
    flex items-center justify-between
    h-[4.5rem] w-full max-w-5xl px-8
    rounded-full
    bg-white bg-opacity-60 backdrop-blur-lg shadow-lg border  border-[#666]
`
export const Brand = tailt.h1`
    font-bold text-2xl
    text-amber-600 hover:drop-shadow-[0_0_0.1rem_#FDE68A]
    cursor-pointer
    duration-200
`