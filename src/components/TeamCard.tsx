import Image from "next/image"
import tailt from "tailt"

export const TeamCard = ({img, name, about}: {img: any, name: string, about: string}) => {
    return(
        <CardWrapper>
            <Image className="rounded-[2rem]" alt="member" src={img}/>
            <Name>{name}</Name>
            <About>{about}</About>
        </CardWrapper>
    )
}

const CardWrapper = tailt.div`
    flex flex-col items-center    
    rounded-[2rem]
`
const Name = tailt.h3`
    font-bold
    text-2xl
`
const About = tailt.p`
    font-medium
    text-sm sm:text-base
    opacity-70
`