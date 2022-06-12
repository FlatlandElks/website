import { RefObject } from "react"
import tailt from "tailt"
import { MenuLink } from "./Links"

export function Menu({menuRef}: {menuRef: RefObject<HTMLDivElement>}) {
    return (
        <DivWrapper ref={menuRef}>
            <Div >
                <MenuLink href="">Road</MenuLink>
                <MenuLink href="">Stake</MenuLink>
                <MenuLink href="">FAQ</MenuLink>
                <MenuLink href="https://twitter.com/flatlandelks/">Twitter</MenuLink>
                <MenuLink href="">Discord</MenuLink>
            </Div>
        </DivWrapper>
    )
}
const DivWrapper = tailt.div`
    hidden lg:hidden
    absolute top-0 left-0 z-[19]
    px-3 py-3 sm:px-10 md:px-14
    w-full h-full
`
const Div = tailt.div`
    sticky top-24 px-8 py-6
    flex flex-col
    w-full
    rounded-[2rem]
    bg-white bg-opacity-60 backdrop-blur-lg shadow-lg border border-[#666]
    text-neutral-900
`