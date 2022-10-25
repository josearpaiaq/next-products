import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products Next.js</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div 
          className="
            h-screen 
            flex 
            justify-center 
            items-center 
            bg-[url('/home-bg.jpg')]
          "
        >
          <h1 className='text-2xl xl:text-8xl md:text-4xl'>
            Movies App
          </h1>
        </div>
      </main>
    </>
  )
}

export default Home
