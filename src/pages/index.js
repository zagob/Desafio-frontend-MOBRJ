import Head from 'next/head'
import { Menu } from '../components/Menu'
import { Home } from '../components/Home'

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Desafio</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>

        <div className="flex flex-row justify-between">
          <Menu />
          <Home />
        </div>
    </div>
  )
}
