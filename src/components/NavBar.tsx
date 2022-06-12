import Link from "next/link"
import tailt from "tailt"

export const NavBar = () => {
    return (
        <NavDiv>
            <NavLink href="">Road</NavLink>
            <NavLink href="">Stake</NavLink>
            <NavLink href="">FAQ</NavLink>
        </NavDiv>
    )
}

const NavDiv = tailt.div`
    hidden lg:flex gap-x-16
`

function NavLink ({children, href}: {children: string, href: string}) {
    return (
        <Link href={href}>
            <LinkText>
                {children}
            </LinkText>
        </Link>
    )
}

const LinkText = tailt.h1`
    font-semibold text-lg
    opacity-50 hover:opacity-100
    hover:text-amber-600 hover:drop-shadow-[0_0_0.1rem_#FDE68A] hover:scale-[1.15] active:scale-95
    duration-200
    cursor-pointer
`