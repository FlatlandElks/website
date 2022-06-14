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
import { SectionTeam } from '../components/Sections'
import { SocialButtons } from '../components/SocialButtons'
import { Brand, TopBar } from '../components/TopBar'
import { TeamCard } from "../components/Card"

const DivFlatlanders = tailt.div`flex flex-col`
const DivTeam = tailt.div`flex flex-col`
const DivElk = tailt.div`grid pt-8 gap-x-4 gap-y-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6`

const Home: NextPage = () => {
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
                <NavLink>Flatlanders</NavLink>
                <NavLink>Future</NavLink>
            </NavBar>
            <SocialButtons/>
            <MenuButton onClick={()=>setMenuOpen(!menuOpen)}/>
        </TopBar>
        { menuOpen &&
            <Menu>
                <NavMenu>
                    <NavLink>Stake</NavLink>
                    <NavLink>Flatlanders</NavLink>
                    <NavLink>Future</NavLink>
                </NavMenu>
            </Menu>
        }
        <Main>
            <SectionTeam>
                <DivFlatlanders>
                    <H1>Flatlanders</H1>
                    <P1>Some are born as Flatlanders. They have special skills.</P1>
                </DivFlatlanders>
                <DivTeam>
                    <H2>Team</H2>
                    <P2>They are chosen to unite lost Flatlanders</P2>
                    <DivElk>
                        <TeamCard img={team}/>
                        <TeamCard img={team}/>
                        <TeamCard img={team}/>
                        <TeamCard img={team}/>
                        <TeamCard img={team}/>
                        <TeamCard img={team}/>
                    </DivElk>
                </DivTeam>
            </SectionTeam>
        </Main>
    </Page>
  )
}

export default Home
