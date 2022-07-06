import { MouseEventHandler } from 'react'
import tailt from 'tailt'
import { IconMenu } from './icons/IconMenu'

export const MenuButton = ( { onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) => (
    <Button onClick={onClick}>
        <IconMenu/>
    </Button>
)

const Button = tailt.button`
    w-9 h-9 lg:hidden
    fill-neutral-500 hover:fill-amber-600 hover:scale-110 active:scale-100
    duration-200
`