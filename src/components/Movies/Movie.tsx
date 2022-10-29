import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import {Movie} from './MovieList'

interface TProps {
  movie: Movie
}

const Movie: FC<TProps> = ({movie}) => {
  return (
    <li className='relative transition ease-in-out delay-100 duration-300 hover:bg-white hover:text-black hover:z-50 hover:scale-105 '>
      <Link href={`/movies/${movie.id}`}>
        <Image
          src={movie.Poster}
          title={`${movie.Title} Poster`}
          alt={`${movie.Title} Poster`}
          className="cursor-pointer"
          width={250}
          height={400}
          layout="responsive"
        />
      </Link>
      <p className='text-xs text-bold text-md pr-2'>{movie.Title}</p>
    </li>
  )
}

export default Movie