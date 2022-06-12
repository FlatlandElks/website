import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import { Menu } from '../components/Menu'
import { MenuButton } from '../components/MenuButton'
import { NavBar } from '../components/NavBar'
import { Page } from '../components/Page'
import { SocialButtons } from '../components/SocialButtons'
import { TopBar } from '../components/TopBar'

const Home: NextPage = () => {
  const menuRef = useRef<HTMLDivElement>(null)

  return (
    <Page>
      <Head>
        <title>Flatland Elks</title>
        <meta name="description" content="Flatland Elks, they came to rule Solana NFTs." />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar menuRef={menuRef}/>
      <Menu menuRef={menuRef}/>
    </Page>
  )
}

export default Home
