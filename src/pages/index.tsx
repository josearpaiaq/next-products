import type { NextPage } from 'next'
import AppWrapper from '../components/layouts/AppWrapper'

const Home: NextPage = () => {
  return (
    <AppWrapper
      title='Home'
    >
      <div className="flex justify-center items-center grow flex-col bg-[url('/home-bg.jpg')]">
        <div className='bg-black bg-opacity-70 flex flex-col w-full grow justify-center items-center'>
          <h1 className='text-5xl xl:text-9xl md:text-7xl'>
            Jose Arpaia
          </h1>
          <h3 className='text-xs'>josearpaiaquintero@gmail.com</h3>
          <h3 className='text-xs'>jose.arpaia@utp.ac.pa.com</h3>
          <h3 className='text-xs'>Instagram: @josearpaiaq</h3>
        </div>
      </div>
    </AppWrapper>      
  )
}

export default Home