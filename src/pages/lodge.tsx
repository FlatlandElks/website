import tailt from "tailt"
import type { NextPage } from 'next'
import Head from 'next/head'
import team from "../assets/team.png"
import { useState } from 'react'
import { H1, H2 } from '../components/Headings'
import { NavLink } from '../components/Links'
import { Main } from '../components/Main'
import { Menu } from '../components/Menu'
import { MenuButton } from '../components/MenuButton'
import { NavBar, NavMenu } from '../components/NavBar'
import { Page } from '../components/Page'
import { P1, P2 } from '../components/Paragraphs'
import { SectionFlatland, SectionTeam } from '../components/Sections'
import { SocialButtons } from '../components/SocialButtons'
import { Brand, TopBar } from '../components/TopBar'
import { TeamCard } from "../components/TeamCard"
import { MusicPlayer } from "../components/MusicPlayer"
import { CardHor, CardsGrid, CardVer } from "../components/Cards"
import Footer from "../components/Footer"

const Flatlanders: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <Page className='bg-amber-100'>
        <Head>
            <title>Flatland Elks - Flatlanders</title>
            <meta name="description" content="Flatland Elks, they came to rule Solana NFTs." />
            <meta name="robots" content="index, follow" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopBar>
            <Brand>Flatland Elks</Brand>
            <NavBar>
                <NavLink>Stake</NavLink>
                <NavLink href='lodge'>Lodge</NavLink>
                <NavLink href='future'>Future</NavLink>
            </NavBar>
            <SocialButtons/>
            <MenuButton onClick={()=>setMenuOpen(!menuOpen)}/>
        </TopBar>
        <MusicPlayer/>
        { menuOpen &&
            <Menu>
                <NavMenu>
                    <NavLink>Stake</NavLink>
                    <NavLink href='flatlanders'>Flatlanders</NavLink>
                    <NavLink href='future'>Future</NavLink>
                </NavMenu>
            </Menu>
        }
        <Main>
            <SectionFlatland>
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
                    
                        <TeamCard name="Ryomen" about="" img={team}/>
                        <TeamCard name="Ekim" about="" img={team}/>
                        <TeamCard name="Jordan" about="" img={team}/>
                        <TeamCard name="Cryptorek" about="" img={team}/>
                        <TeamCard name="Daisy" about="" img={team}/>
                        <TeamCard name="Maxwell" about="" img={team}/>
                    
                
            </SectionTeam>
        </Main>
        <Footer/>

    </Page>
  )
}

export default Flatlanders
