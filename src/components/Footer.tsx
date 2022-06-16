import tailt from "tailt"

export const Footer = tailt.footer`
    flex flex-col items-center text-left
    px-8 py-16
    bg-amber-200
`

export const FooterBox = tailt.div`
    flex flex-col md:flex-row items-start
    gap-y-12
    w-full max-w-5xl
`

export const FooterTitleBox = tailt.div`
    flex flex-col w-full
    gap-y-3
`

export const FooterMainTitle = tailt.h3`
    font-bold
    text-4xl
`

export const FooterSubTitle = tailt.h3` gap-x-6
    font-semibold
    text-lg
`
export const FooterListBox = tailt.div` flex flex-wrap sm:flex-nowrap w-full justify-between gap-y-12 `
export const FooterList = tailt.div` flex flex-col gap-y-3 w-1/2 md:w-auto`
export const FooterH = tailt.h4` font-bold text-lg `
export const FooterUl = tailt.ul` flex flex-col gap-y-2 `
export const FooterLi = tailt.li` font-semibold text-base opacity-70 hover:opacity-100 hover:text-amber-600 cursor-pointer duration-200 `
