import Link from "next/link"
import tailt from "tailt"
import { IconDiscord, IconTwitter } from "./icons/IconSocial"

export function SocialButtons() {
    return (
        <Div>
            <Button>
                <Link target="_blank" href="https://twitter.com/flatlandelks/">
                    <IconTwitter/>
                </Link>
            </Button>
            <Button>
                <Link target="_blank" href="">
                    <IconDiscord/>
                </Link>
            </Button>
        </Div>
    )
}
const Div = tailt.div`
    hidden lg:flex gap-x-8 w-40 justify-end
`
const Button = tailt.button`
    w-9 h-9
    hover:scale-110 active:scale-100
    duration-200
`