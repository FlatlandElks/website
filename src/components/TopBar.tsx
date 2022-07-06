import Link from "next/link"
import { MouseEventHandler, ReactNode, RefObject } from "react"
import tailt from "tailt"
import { MenuButton } from "./MenuButton"
import { SocialButtons } from "./SocialButtons"

export const TopBar = ({onClickMenuButton}: {onClickMenuButton: MouseEventHandler}) => (
    <HeaderWrapper>
        <Header>
            <Brand>Flatland Elks</Brand>
                <NavBar>
                    <Ul>
                        <Li href='stake'>Stake</Li>
                        <Li href='lodge'>Lodge</Li>
                        <Li href='future'>Future</Li>
                    </Ul>
                </NavBar>
                <SocialButtons/>
                <MenuButton onClick={onClickMenuButton}/>
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
const Brand = tailt.h1`
    font-bold text-2xl
    text-amber-600 hover:drop-shadow-[0_0_0.1rem_#FDE68A]
    cursor-pointer
    duration-200
`
const NavBar = tailt.nav`
    hidden lg:flex
`
const Ul = tailt.ul`
    flex gap-x-16
`

const Li = ({children, href = ""}: {children:string, href?: string}) => {
    return(
        <Link href={href}>
            <LiSelf>{children}</LiSelf>
        </Link>
    )
}

const LiSelf = tailt.li`
    font-medium text-lg
    text-neutral-500 hover:text-amber-600
    hover:scale-110 active:scale-100
    duration-200 cursor-pointer
`