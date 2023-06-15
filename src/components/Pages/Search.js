import React from 'react'
import SearchMovies from "../SearchMovies/SearchMovies"
import MovieDetail from '../MovieDetail/MovieDetail'
import { useSelector } from 'react-redux'
export default function Search() {
  const {MoviesDetail} = useSelector(state => state.infoMovies)
  return (
    <div>
        <SearchMovies/>
        <MovieDetail showModal={MoviesDetail ? true : false} movie={MoviesDetail}/>
    </div>
  )
}
