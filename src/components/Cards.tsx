import tailt from "tailt"

export const CardsGrid = tailt.div`
    grid grid-cols-1 sm:grid-cols-2
    font-bold text-4xl sm:text-3xl md:text-4xl lg:text-5xl
    w-full gap-y-4 gap-x-5
    text-white
`

export const CardHor = tailt.div`
    flex flex-col items-center justify-center lg:flex-row sm:col-span-2
    h-[calc(30vw+25rem)] sm:h-[calc(20vw+6rem)] sm:max-h-96
    rounded-2xl
    bg-gradient-to-t from-amber-600 to-amber-500
`
export const CardVer = tailt.div`
    flex flex-col items-center justify-center
    h-[calc(30vw+25rem)] sm:h-[calc(30vw+12rem)] max-h-[40rem]
    rounded-2xl
    bg-gradient-to-t from-amber-600 to-amber-500
`