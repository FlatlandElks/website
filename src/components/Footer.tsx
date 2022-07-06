import { ReactNode } from "react"
import tailt from "tailt"
import LLink from "next/link"
import Link from "next/link"


export const FooterWrapper = tailt.footer`flex flex-col items-center text-left px-8 py-16 bg-amber-200`
export const Div = tailt.div`flex flex-col md:flex-row items-start gap-y-12 w-full max-w-5xl`
export const ItemsWrapper = tailt.div`flex flex-wrap sm:flex-nowrap w-full justify-between gap-y-12`



export default function Footer() {
    return(
        <FooterWrapper>
            <Div>
                <BrandItem/>
                <ItemsWrapper>
                    <Item title="Social Media">
                        <Li>Twitter</Li>
                        <Li>Discord</Li>
                        <Li>Instagram</Li>
                        <Li>Tiktok</Li>
                    </Item>
                    <Item title="Social Media">
                        <Li>Twitter</Li>
                        <Li>Discord</Li>
                        <Li>Instagram</Li>
                        <Li>Tiktok</Li>
                    </Item>
                    <Item title="Social Media">
                        <Li>Twitter</Li>
                        <Li>Discord</Li>
                        <Li>Instagram</Li>
                        <Li>Tiktok</Li>
                    </Item>
                </ItemsWrapper>
            </Div>
        </FooterWrapper>
    )
}



export const BrandItemDiv = tailt.div`flex flex-col w-full gap-y-3`
export const BrandTitle = tailt.h3`font-bold text-4xl`
export const BrandMark = tailt.h3`gap-x-6 font-semibold text-lg`

const BrandItem = () => (
    <BrandItemDiv>
        <BrandTitle>Flatland Elks</BrandTitle>
        <BrandMark>© Flatland Elks</BrandMark>
    </BrandItemDiv>
)



export const LiSelf = tailt.li`font-semibold text-base opacity-70 hover:opacity-100 hover:text-amber-700 cursor-pointer duration-200`

interface LiState { href?: string, children: string }
const Li = ({ href = '/', children }: LiState) => <LiSelf><Link href={href}>{children}</Link></LiSelf>



export const ItemDiv = tailt.div`flex flex-col gap-y-3 w-1/2 md:w-auto`
export const Title = tailt.h4`font-bold text-lg`
export const Ul = tailt.ul`flex flex-col gap-y-2`

interface ItemState { title: string, children: ReactNode }
const Item = ({ title, children }: ItemState) => (
    <ItemDiv>
        <Title>{title}</Title>
        <Ul>
            {children}
        </Ul>
    </ItemDiv>
)