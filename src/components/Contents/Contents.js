import React, { useEffect } from 'react'
import MoviesRow from './MoviesRow'
import { useDispatch, useSelector } from 'react-redux'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import * as ACTIONS from '../store/actions'
import styled from 'styled-components'
import {animateScroll as scroll } from 'react-scroll'
import { useScrollY } from '../hooks'

const ScrollToTop = () => {
  scroll.scrollToTop()
}


export default function Contents() {
  const dispatch = useDispatch()
  const [scrollY] = useScrollY()
  const { 
    NextflixOrigianls ,
    TrendingMovies,
    TopratedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries
  } = useSelector(state => state.infoMovies)

  useEffect(() => {
    dispatch(ACTIONS.getNextflixOriginals())
    dispatch(ACTIONS.getTrendingMovies())
    dispatch(ACTIONS.getTopRatedMovies())
    dispatch(ACTIONS.getActionMovies())
    dispatch(ACTIONS.getComedyMovies())
    dispatch(ACTIONS.getHorrorMovies())
    dispatch(ACTIONS.getRomanceMovies())
    dispatch(ACTIONS.getDocumentaries())
  },[dispatch])

  return (
    <div>
        <MoviesRow movies={NextflixOrigianls} title={"Nextflix Originals"} isNextflix={true} idSection='nextflix'/>
        <MoviesRow movies={TrendingMovies} title={"Trending Movies"} idSection='trending'/>
        {/* <MoviesRow movies={TopratedMovies} title={"Top Rated Movies"} idSection="toprated"/> */}
        <MoviesRow movies={ActionMovies} title={"Action Movies"} idSection="action"/>
        <MoviesRow movies={ComedyMovies} title={"Comedy Movies"} idSection="comedy"/>
        <MoviesRow movies={HorrorMovies} title={"Horror Movies"} idSection="horror"/>
        <MoviesRow movies={RomanceMovies} title={"Romace Movies"} idSection="romace"/>
        <MoviesRow movies={Documentaries} title={"Documentaries Movies"} idSection="documentaries"/>
        <GoToTop 
          onClick={() => ScrollToTop()}
          style={{
            visibility : `${scrollY > 600  ? 'visible': 'hidden'}`
          }}
        >
          <FaArrowAltCircleUp/>
        </GoToTop>
    </div>
  )
}

const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 600px){
    right: 40px;
  }
`