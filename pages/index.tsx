import type { NextPage } from 'next'
import Head from 'next/head'
import CryptoJS from 'crypto-js'
import Link from 'next/link'
import { Button } from '@/components/button'


const Home: NextPage = () => {
  var uuid = CryptoJS.SHA1(new Date().toDateString())

  return (
    <div >
      <Head>
        <title>krator</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main style={{display:"flex", height: "100vh", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <h1 style={{marginBottom:"5vh"}}>
         KRATOR
        </h1>

        <Link href={`edit/${uuid}`}>
          <Button>create now</Button>
        </Link>
      </main>
    </div>
  )
}

export default Home
