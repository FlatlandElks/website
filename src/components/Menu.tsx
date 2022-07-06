import Link from 'next/link'
import { MouseEventHandler, ReactNode, useState } from 'react'
import tailt from 'tailt'
import { IconMenu } from './icons/IconMenu'

export const Menu = ({ isOpen, onClickOutside }: { isOpen: boolean, onClickOutside: MouseEventHandler }) => {
    return (
        <>
        {isOpen &&
            <Wrapper>
                <BGCover onClick={onClickOutside}/>
                <PopUp>
                    <Item href='/'>Home</Item>
                    <Item href='/lodge'>Lodge</Item>
                    <Item href='/'>Stake</Item>
                </PopUp>
            </Wrapper>}
        </>
    )
}

const Wrapper = tailt.div`
    fixed top-24 left-0 lg:hidden z-30
    w-full px-3 sm:px-10 md:px-14
`
const PopUp = tailt.ul`
    flex flex-col rounded-[2.25rem]
    p-4
    bg-white bg-opacity-60 backdrop-blur-lg
    shadow-lg border border-[#666]
    duration-200
    menu-animation
`
const BGCover = tailt.div`
    fixed top-0 left-0
    w-full h-full
`

const ItemSelf = tailt.li`
    flex items-center justify-center
    h-[4.5rem] rounded-[2.25rem]
    font-medium text-2xl
    text-neutral-500
    hover:bg-amber-600 hover:bg-opacity-10 active:bg-opacity-40
    duration-200 cursor-pointer
`
const Item = ({ children, href }: { children: ReactNode, href: string }) => (
    <Link href={href}><ItemSelf>{children}</ItemSelf></Link>
)