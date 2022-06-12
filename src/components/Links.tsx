import Link from "next/link"
import tailt from "tailt"

export function MenuLink({href, children}: {href: string, children: string}) {
    return (
        <Link href={href}>
            <TextDiv>
                <LinkText>
                    {children}
                </LinkText>
            </TextDiv>
        </Link>
    )
}


const TextDiv = tailt.div`
    flex justify-start
    w-full
`
const LinkText = tailt.h2`
    font-semibold text-2xl
    flex h-16 items-center
    opacity-80 hover:opacity-100
    hover:text-amber-600 hover:drop-shadow-[0_0_0.1rem_#FDE68A] hover:scale-[1.15] active:scale-95
    duration-200
    cursor-pointer
`