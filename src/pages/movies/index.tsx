import AppWrapper from '../../components/layouts/AppWrapper'
import React, { NextPage } from 'next'
import { MovieList } from '../../components/Movies/MovieList'

interface TProps {
  response: string
}

const Movies: NextPage<TProps> = () => {
  return (
    <AppWrapper
      title='Movies'
    >
      <MovieList />
    </AppWrapper>
  )
}

export default Movies;