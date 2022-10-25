import React from 'react'
import { NextPage, GetServerSideProps } from "next"
import AppWrapper from "../../components/layouts/AppWrapper"
import { Movie } from '../../components/Movies/MovieList'

interface TProps {
  movie: Movie
}

const MovieDetail: NextPage<TProps> = ({movie}) => {
  // console.log('pelicula', movie)
  return (
    <AppWrapper
      title={movie.title}
      goBack
    >
      <div 
        className='flex justify-center items-center w-full grow bg-slate-700'
      >
        <div className='flex flex-row'>
          <img 
            src={movie.Poster}
            title={movie.title}
            alt={`${movie.title} Poster`}
            width="250"
            className="cursor-pointer"
          />
          <ul 
            className='flex flex-col mx-4 self-start'
          >
            <li className='text-5xl cursor-pointer text-black hover:text-gray-300'>{movie.title}</li>
            <li>
              Director: <span className='cursor-pointer text-black hover:text-gray-300'>{movie.Director || 'None'}</span>
            </li>
            <li>
              Distribuidor: <span className='cursor-pointer text-black hover:text-gray-300'>{movie.Distributor || 'None'}</span>
            </li>
            <li>
              Rotten Tomatoes Rating: <span className='cursor-pointer text-black hover:text-gray-300'>{movie['Rotten Tomatoes Rating'] || 'None'}</span>
            </li>
          </ul>
        </div>
      </div>
    </AppWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // console.log('context movie detail', ctx)
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/movies/" + ctx.params?.id
  );
  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
};

export default MovieDetail