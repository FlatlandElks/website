import tailt from "tailt"
import type { NextPage } from 'next'
import Head from 'next/head'
import theLodge from '../../public/thelodge.png'
import team from "../assets/team.png"
import { useState } from 'react'
import { H1, H2 } from '../components/Headings'
import { Main } from '../components/Main'
import { Page } from '../components/Page'
import { P1, P2 } from '../components/Paragraphs'
import { SectionFlatland, SectionTeam } from '../components/Sections'
import { TopBar } from '../components/TopBar'
import { TeamCard, TeamGrid } from "../components/TeamCard"
import { MusicPlayer } from "../components/MusicPlayer"
import { CardHor, CardsGrid, CardVer } from "../components/Cards"
import Footer from "../components/Footer"
import { Menu } from "../components/Menu"
import { MenuButton } from "../components/MenuButton"
import Image from "next/image"

const Flatlanders: NextPage = () => {
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
        <Menu isOpen={isOpen}  onClickOutside={() => setOpen(!isOpen)}/>
        <MusicPlayer/>
        <Main className=" justify-center text-2xl font-medium text-amber-700">
            It will worth to wait ;)
        </Main>
        <Footer/>
    </Page>
  )
}

export default Flatlanders
