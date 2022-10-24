import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import Footer from '../commons/Footer'
import NavBar from '../commons/NavBar'

interface IProps {
  title: string
  description?: string
  goBack?: boolean
}

const AppWrapper: FC<PropsWithChildren<IProps>> = ({
  title,
  description,
  goBack,
  children
}) => {
  const formattedTitle = `${title} | RootLab Next Course`
  return <>
    <div className="bg-slate-700 min-h-screen flex flex-col">
      <Head>
        <title>
          {formattedTitle}
        </title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='text-black'>
        <NavBar goBack={goBack} />
      </header>
      <main 
        className="grow flex flex-col text-white"
      >
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </>
}

export default AppWrapper