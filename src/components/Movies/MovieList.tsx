import React from 'next'
import { useEffect, useState } from 'react'
import Movie from './Movie'

export interface Movie {
  id: number
  Poster: string
  Title: string
  Distributor: string | null
  Source: string | null
  "US Gross": number 
  "Worldwide Gross": number
  "US DVD Sales": number
  "Production Budget": number
  "Release Date": number
  "MPAA Rating": string
  "Running Time min": number | null
  "Major Genre": string | null
  "Creative Type": string | null
  "Director": string | null
  "Rotten Tomatoes Rating": null
  "IMDB Rating": number | null
  "IMDB Votes": number | null
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    try {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`)
        .then(res => res.json())
        .then((data: Movie[]) => setMovies(data.slice(0, 16)))
        .catch(error => console.error(error))
    } catch (error) {
      console.error(error)
    }
  }, [])

  return movies
}

export const MovieList = () => {
  const movies = useMovies()

  // TODO: paginacion
  return (
    <ul className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-5 justify-center items-center p-4'>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie} 
        />
      ))}
    </ul>
  )
}
