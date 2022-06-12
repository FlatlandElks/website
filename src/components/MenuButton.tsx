import { RefObject } from "react"
import tailt from "tailt"

export const MenuButton = ({menuRef}: {menuRef: RefObject<HTMLDivElement>}) => {

    function onClick() {
        if(!menuRef) return
        menuRef.current?.classList.toggle("hidden")
    }

    return (
        <MenuDiv>
            <Button onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M7.5 36.35Q6.8 36.35 6.3 35.85Q5.8 35.35 5.8 34.6Q5.8 33.9 6.3 33.425Q6.8 32.95 7.5 32.95H40.5Q41.2 32.95 41.7 33.425Q42.2 33.9 42.2 34.65Q42.2 35.35 41.7 35.85Q41.2 36.35 40.5 36.35ZM7.5 25.7Q6.8 25.7 6.3 25.2Q5.8 24.7 5.8 24Q5.8 23.25 6.3 22.775Q6.8 22.3 7.5 22.3H40.5Q41.2 22.3 41.7 22.8Q42.2 23.3 42.2 24Q42.2 24.75 41.7 25.225Q41.2 25.7 40.5 25.7ZM7.5 15.05Q6.8 15.05 6.3 14.575Q5.8 14.1 5.8 13.35Q5.8 12.65 6.3 12.15Q6.8 11.65 7.5 11.65H40.5Q41.2 11.65 41.7 12.15Q42.2 12.65 42.2 13.4Q42.2 14.1 41.7 14.575Q41.2 15.05 40.5 15.05Z"/></svg>
            </Button>
        </MenuDiv>
    )
}
const MenuDiv = tailt.div`
    flex lg:hidden items-center h-full
`
const Button = tailt.button`
    h-9 w-9
    fill-neutral-900  hover:fill-amber-600 hover:drop-shadow-[0_0_0.1rem_#FDE68A]
    opacity-70
    hover:scale-[1.15] active:scale-95
    duration-200
`