import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Menu } from '../components/Menu'
import { MusicPlayer } from '../components/MusicPlayer'
import { Page } from '../components/Page'
import { TopBar } from '../components/TopBar'

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
      <TopBar onClickMenuButton={() => setOpen(!isOpen)}/>
      <MusicPlayer/>
      <Menu isOpen={isOpen} onClickOutside={() => setOpen(!isOpen)}/>
    </Page>
  )
}

export default Home
