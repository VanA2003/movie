import React, { useEffect, useState } from 'react'
import Intro from '../Intro/Intro'
import Contents from '../Contents/Contents';
import Menu from '../Menu/Menu'
import MovieDetail from '../MovieDetail/MovieDetail';
import { useSelector } from 'react-redux';

export default function Home() {
    const {MoviesDetail} = useSelector(state => state.infoMovies)
    //const [isShowMovieDetail, setIsShowMovieDetail] = useState()

    // useEffect(() => {
    //     setIsShowMovieDetail(MoviesDetail ? true : false)
    // },[isShowMovieDetail])
  return (
    <div>
        <Intro/>
        <Contents/>
        <Menu/>
        <MovieDetail movie={MoviesDetail} showModal={MoviesDetail ? true : false}/>
        
    </div>
  )
}
