import Link from "next/link"
import tailt from "tailt"

export const NavLink = ({children, href = ""}: {children:string, href?: string}) => {
    return(
        <Link href={href}>
            <NavH1>{children}</NavH1>
        </Link>
    )
}

export const NavH1 = tailt.h1`
    flex justify-center items-center text-center
    font-medium h-14 lg:h-16
    text-2xl lg:text-lg
    text-neutral-500 hover:text-amber-600
    hover:scale-110 active:scale-100
    duration-200 cursor-pointer
`