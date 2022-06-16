import { ReactNode } from "react"
import tailt from "tailt"

export const Menu = ({children}: {children: ReactNode}) => {
    return (
        <DivWrapper>
            <Div>
                {children}
            </Div>
        </DivWrapper>
    )
}

const DivWrapper = tailt.div`
    lg:hidden
    fixed top-24 left-0 z-[19]
    px-3 py-0 sm:px-10 md:px-14
    w-full h-full 
`
const Div = tailt.div`
    px-8 py-6
    flex flex-col items-center
    w-full
    rounded-[2rem]
    bg-white bg-opacity-60 backdrop-blur-lg shadow-lg border border-[#666]
    text-neutral-900
`