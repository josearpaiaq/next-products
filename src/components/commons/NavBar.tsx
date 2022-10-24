import Link from 'next/link'
import Image from 'next/image'
import { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'

interface TProps {
  goBack?: boolean | false
}

const NavBar: FC<TProps> = ({goBack}) =>  {
  const router = useRouter()

  return (
    <div
      className='flex flex-col justify-center bg-white h-20' 
    >
      <div className='flex items-center'>
        <div
          className='mx-2'
        >
          <Image 
            src="/logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
        </div>
        <Link href='/'>
          <a 
            className='text-black text-center mx-2 px-4 py-2 hover:underline'
          >Home</a>
        </Link>
        <Link href='/movies'>
          <a
            className='text-black text-center mx-2 px-4 py-2 hover:underline'
          >Movies</a>
        </Link>
      </div>

      {
        goBack && 
        (<div
          className='flex cursor-pointer mx-2 hover:text-indigo-500 hover:underline' 
          onClick={() => router.back()}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>Back
        </div>)
      }
    </div>
  )
}

export default NavBar;
