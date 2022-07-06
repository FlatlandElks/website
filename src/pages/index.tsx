import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { NavLink } from '../components/Links'
import { Menu } from '../components/Menu'
import { MenuButton } from '../components/MenuButton'
import { MusicPlayer } from '../components/MusicPlayer'
import { NavBar, NavMenu } from '../components/NavBar'
import { Page } from '../components/Page'
import { SocialButtons } from '../components/SocialButtons'
import { Brand, TopBar } from '../components/TopBar'

const Home: NextPage = () => {
  const [isOpen, setOpen] = useState(false)

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
          <NavLink href='stake'>Stake</NavLink>
          <NavLink href='lodge'>Lodge</NavLink>
          <NavLink href='future'>Future</NavLink>
        </NavBar>
        <SocialButtons/>
        <MenuButton onClick={() => setOpen(!isOpen)}/>
      </TopBar>
      <MusicPlayer/>
      <Menu isOpen={isOpen} onClickOutside={() => setOpen(!isOpen)}/>
    </Page>
  )
}

export default Home
