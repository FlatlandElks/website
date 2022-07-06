import Image from "next/image"
import { ReactNode } from "react"
import tailt from "tailt"

export const TeamCard = ({img, name, about}: {img: any, name: string, about: string}) => {
    return(
        <Card>
            <Image className="rounded-[2rem]" alt="member" src={img}/>
            <Name>{name}</Name>
            <About>{about}</About>
        </Card>
    )
}

const Card = tailt.div`
    flex flex-col
    gap-y-1
    rounded-[2rem]
`
const Name = tailt.h3`
    font-bold pl-2
    text-2xl
`
const About = tailt.p`
    font-medium
    text-sm lg:text-base
    opacity-80 px-1
`


const Grid= tailt.div`
    grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-x-5 gap-y-6
`

export const TeamGrid = ({ children }: { children: ReactNode}) => (
    <Grid>{children}</Grid>
)