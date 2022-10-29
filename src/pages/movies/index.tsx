import AppWrapper from '../../components/layouts/AppWrapper'
import React, { NextPage } from 'next'
import { MovieList } from '../../components/Movies/MovieList'
 
const Movies: NextPage = () => {
  return (
    <AppWrapper
      title='Movies'
    >
      <MovieList />
    </AppWrapper>
  )
}

export default Movies