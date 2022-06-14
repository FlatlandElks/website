import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { NavLink } from '../components/Links'
import { Menu } from '../components/Menu'
import { MenuButton } from '../components/MenuButton'
import { NavBar, NavMenu } from '../components/NavBar'
import { Page } from '../components/Page'
import { SocialButtons } from '../components/SocialButtons'
import { Brand, TopBar } from '../components/TopBar'

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <Page className="bg-[url('/bg.png')] bg-cover bg-[85%_top]">
      <Head>
        <title>Flatland Elks</title>
        <meta name="description" content="Flatland Elks, they came to rule Solana NFTs." />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar>
        <Brand>Flatland Elks</Brand>
        <NavBar>
          <NavLink>Stake</NavLink>
          <NavLink href='flatlanders'>Flatlanders</NavLink>
          <NavLink>Future</NavLink>
        </NavBar>
        <SocialButtons/>
        <MenuButton onClick={()=>setMenuOpen(!menuOpen)}/>
      </TopBar>
      { menuOpen &&
        <Menu>
          <NavMenu>
            <NavLink>Stake</NavLink>
            <NavLink href='flatlanders'>Flatlanders</NavLink>
            <NavLink>Future</NavLink>
          </NavMenu>
        </Menu>
      }
    </Page>
  )
}

export default Home
