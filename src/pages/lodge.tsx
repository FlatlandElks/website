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
import { SocialButtons } from '../components/SocialButtons'
import { TopBar } from '../components/TopBar'
import { TeamCard, TeamGrid } from "../components/TeamCard"
import { MusicPlayer } from "../components/MusicPlayer"
import { CardHor, CardsGrid, CardVer } from "../components/Cards"
import Footer from "../components/Footer"
import { Menu } from "../components/Menu"
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
        <Main>
            <SectionFlatland>
                <Image className="drop-shadow-[0_0_1rem_#000000bb]" alt="thelodge" src={theLodge}/>
                <CardsGrid>
                    <CardHor>They are Elks</CardHor>
                    <CardVer>Flatlanders</CardVer>
                    <CardVer>They rule Solana</CardVer>
                    <CardHor>Apes? Nah, elks are the best</CardHor>
                </CardsGrid>
            </SectionFlatland>
            <SectionTeam>
                
                    <H2>Team</H2>
                    <P2>They are chosen to unite lost Flatlanders</P2>
                    <TeamGrid>
                        <TeamCard name="Ryomen" about="" img={team}/>
                        <TeamCard name="Ekim" about="" img={team}/>
                        <TeamCard name="Jordan" about="" img={team}/>
                        <TeamCard name="Cryptorek" about="" img={team}/>
                        <TeamCard name="Daisy" about="" img={team}/>
                        <TeamCard name="Maxwell" about="" img={team}/>
                    </TeamGrid>
            </SectionTeam>
        </Main>
        <Footer/>

    </Page>
  )
}

export default Flatlanders
