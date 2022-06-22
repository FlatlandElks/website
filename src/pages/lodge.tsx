import tailt from "tailt"
import type { NextPage } from 'next'
import Head from 'next/head'
import lodge from "../../public/lodge.png"
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
import { Footer, FooterBox, FooterH, FooterLi, FooterList, FooterListBox, FooterMainTitle, FooterSubTitle, FooterTitleBox, FooterUl } from "../components/Footer"
import Image from "next/image"
import { MusicPlayer } from "../components/MusicPlayer"

const DivFlatlanders = tailt.div`flex flex-col`
const DivTeam = tailt.div`flex flex-col`
const DivElk = tailt.div`grid pt-8 gap-x-4 gap-y-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6`
const ImgAntler = tailt.div``

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
            <SectionTeam>

            <ImgAntler>
                <Image className="drop-shadow-lg rounded-[2rem]" src={lodge} alt="lodge"/>
            </ImgAntler>
                <DivTeam>
                    <H2>Team</H2>
                    <P2>They are chosen to unite lost Flatlanders</P2>
                    <DivElk>
                        <TeamCard name="Ryomen" about="" img={team}/>
                        <TeamCard name="Ekim" about="" img={team}/>
                        <TeamCard name="Jordan" about="" img={team}/>
                        <TeamCard name="Cryptorek" about="" img={team}/>
                        <TeamCard name="Yadon" about="" img={team}/>
                        <TeamCard name="Daisy" about="" img={team}/>
                        <TeamCard name="Maxwell" about="" img={team}/>
                    </DivElk>
                </DivTeam>
            </SectionTeam>
        </Main>
        <Footer>
            <FooterBox>
                <FooterTitleBox>
                    <FooterMainTitle>Flatland Elks</FooterMainTitle>
                    <FooterSubTitle>© Flatland Elks</FooterSubTitle>
                </FooterTitleBox>
                <FooterListBox>
                    <FooterList>
                        <FooterH>SocialMedia</FooterH>
                        <FooterUl>
                            <FooterLi>Twitter</FooterLi>
                            <FooterLi>Discord</FooterLi>
                            <FooterLi>Instagram</FooterLi>
                            <FooterLi>Tiktok</FooterLi>
                        </FooterUl>
                    </FooterList>
                    <FooterList>
                        <FooterH>SocialMedia</FooterH>
                        <FooterUl>
                            <FooterLi>Twitter</FooterLi>
                            <FooterLi>Discord</FooterLi>
                            <FooterLi>Instagram</FooterLi>
                            <FooterLi>Tiktok</FooterLi>
                        </FooterUl>
                    </FooterList>
                    <FooterList>
                        <FooterH>Projects</FooterH>
                        <FooterUl>
                            <FooterLi>Blabla</FooterLi>
                            <FooterLi>Lorem</FooterLi>
                            <FooterLi>Ipsum</FooterLi>
                            <FooterLi>Dolor</FooterLi>
                            <FooterLi>Ipsum</FooterLi>
                        </FooterUl>
                    </FooterList>
                </FooterListBox>
            </FooterBox>
        </Footer>
    </Page>
  )
}

export default Flatlanders
