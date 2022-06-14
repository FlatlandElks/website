import Image from "next/image"
import tailt from "tailt"

export const TeamCard = ({img}: {img: any}) => {
    return(
        <CardWrapper>
            <Image className="rounded-[2rem]" alt="" src={img}/>
            <Name>Ryomen</Name>
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