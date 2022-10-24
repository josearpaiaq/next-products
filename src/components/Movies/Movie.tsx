import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import {Movie} from './MovieList'

interface TProps {
  movie: Movie
}

const Movie: FC<TProps> = ({movie}) => {
  return (
    <li className='transition ease-in-out delay-100 hover:scale-105 hover:bg-white hover:text-black duration-300'>
      <Link href={`/movies/${movie.id}`}>
        {/* <Image 
          src={movie.Poster}
          alt={`${movie.title} Poster`}
        /> */}
        <img 
          src={movie.Poster}
          title={movie.title}
          alt={`${movie.title} Poster`}
          className="cursor-pointer"
        />
      </Link>
      <p className='text-bold pr-2'>{movie.title}</p>
    </li>
  )
}

export default Movie