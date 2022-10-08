import Link from 'next/link'

export default function NavBar() {
  return (
    <div 
      className='
        grid 
        grid-cols-4
        md:grid-cols-12
        gap-4 
        px-4 
        py-2
      '
    >
      <Link href='/'>
        <a 
          className='bg-blue-300 text-black text-center rounded hover:bg-blue-500'
        >Home</a>
      </Link>

      <Link href='/blog'>
        <a
          className='bg-blue-300 text-black text-center rounded hover:bg-blue-500'
        >Blog</a>
      </Link>
    </div>
  )
}
