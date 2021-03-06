import tailt from "tailt"
import type { NextPage } from 'next'
import Head from 'next/head'
import team from "../assets/team.png"
import { useState } from 'react'
import { H1, H2 } from '../components/Headings'
import { Main } from '../components/Main'
import { Menu } from '../components/Menu'
import { MenuButton } from '../components/MenuButton'
import { Page } from '../components/Page'
import { P1, P2 } from '../components/Paragraphs'
import { SectionTeam } from '../components/Sections'
import { SocialButtons } from '../components/SocialButtons'
import { TopBar } from '../components/TopBar'
import { TeamCard } from "../components/TeamCard"
import Footer, { FooterWrapper, Div, BrandTitle, BrandMark, BrandItemDiv } from "../components/Footer"

const DivFlatlanders = tailt.div`flex flex-col`
const DivTeam = tailt.div`flex flex-col`
const DivElk = tailt.div`grid pt-8 gap-x-4 gap-y-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6`

const Future: NextPage = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Page className='bg-amber-100'>
        <Head>
            <title>Flatland Elks - Flatlanders</title>
            <meta name="description" content="Flatland Elks, they came to rule Solana NFTs." />
            <meta name="robots" content="index, follow" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopBar onClickMenuButton={() => setOpen(!isOpen)}/>
        <Menu isOpen={isOpen} onClickOutside={() => setOpen(!isOpen)}/>
        <Main>
            
        </Main>
        <Footer/>
    </Page>
  )
}

export default Future
