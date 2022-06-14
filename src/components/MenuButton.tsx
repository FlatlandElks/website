import { MouseEventHandler, RefObject } from "react"
import tailt from "tailt"
import { IconMenu } from "./icons/IconMenu"

export const MenuButton = ({onClick}: {onClick: MouseEventHandler<HTMLButtonElement>}) => {
    return (
            <Button onClick={onClick}>
                <IconMenu/>
            </Button>
    )
}

const Button = tailt.button`
    lg:hidden
    h-9 w-9
    fill-amber-600
    hover:scale-[1.15] active:scale-95
    duration-200
`