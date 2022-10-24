import type { NextPage } from 'next'
import AppWrapper from '../components/layouts/AppWrapper'

const Home: NextPage = () => {
  return <>
    <AppWrapper
      title='Home'
    >
      <div className="flex justify-center items-center grow flex-col bg-[url('/home-bg.jpg')]">
        <div className='bg-black bg-opacity-70 flex flex-col w-full grow justify-center items-center'>
          <h1 className='text-5xl xl:text-9xl md:text-7xl'>
            Movies App
          </h1>
        </div>
      </div>
    </AppWrapper>      
  </>
}

export default Home