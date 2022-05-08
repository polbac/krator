import type { NextPage } from 'next'
import Head from 'next/head'
import CryptoJS from 'crypto-js'
import Link from 'next/link'
import { Button } from '@/components/button'
import { Gradient } from '@/components/gradient/Gradient.style'
import { Branding } from '@/components/branding/Branding'


const Home: NextPage = () => {
  var uuid = CryptoJS.SHA1(new Date().toDateString())

  return (
    <Gradient>
      <Head>
        <title>krator</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main style={{display:"flex", height: "100vh", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <Branding />
        <br/>
         

        <Link href={`edit/${uuid}`}>
          <Button>create now</Button>
        </Link>
      </main>
    </Gradient>
  )
}

export default Home
