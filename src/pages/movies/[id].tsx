import React from 'react'
import { NextPage, GetServerSideProps } from "next"
import AppWrapper from "../../components/layouts/AppWrapper"
import { Movie } from '../../components/Movies/MovieList'
import Image from 'next/image'

interface TProps {
  movie: Movie
}

const MovieDetail: NextPage<TProps> = ({movie}) => {
  return (
    <AppWrapper
      title={movie.Title}
      goBack
    >
      <div 
        className='flex justify-center items-center w-full grow bg-slate-700 p-4'
      >
        <div className='flex flex-col items-center md:flex-row'>
          <Image 
            src={movie.Poster}
            title={movie.Title}
            alt={`${movie.Title} Poster`}
            width={250}
            height={400}
            layout="fixed"
            className="cursor-pointer"
          />
          <ul 
            className='flex flex-col mx-4 self-start'
          >
            <li className='text-5xl cursor-pointer text-black'>{movie.Title}</li>
            <li>
              Director: <span className='cursor-pointer text-gray-300'>{movie.Director || 'None'}</span>
            </li>
            <li>
              Distribuidor: <span className='cursor-pointer text-gray-300'>{movie.Distributor || 'None'}</span>
            </li>
            <li>
              Rotten Tomatoes Rating: <span className='cursor-pointer text-gray-300'>{movie['Rotten Tomatoes Rating'] || 'None'}</span>
            </li>
          </ul>
        </div>
      </div>
    </AppWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let movie = null
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/movies/" + ctx.params?.id
    );
    movie = await res.json();
    
  } catch (error) {
    console.log(error)
  }
  return {
    props: {
      movie,
    },
  };
};

export default MovieDetail