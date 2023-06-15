import * as Types from "../actions/types"

const reducerMoviesInitialState = {
  NextflixOrigianls : null,
  TrendingMovies: null,
  TopratedMovies: null,
  ActionMovies: null,
  ComedyMovies: null,
  HorrorMovies: null,
  RomanceMovies: null,
  Documentaries: null,
  MoviesDetail : null,
  SearchMovies: null
}

const reducerMovies  = (state = reducerMoviesInitialState, { type, payload }) => {
  switch (type) {

  case Types.GET_NEXTFLIX_ORIGINALS:
    return { ...state, NextflixOrigianls: payload }

  case Types.GET_TRENDING_MOVIES:
    return { ...state, TrendingMovies: payload }

  case Types.GET_TOPRATED:
    return { ...state, TopratedMovies: payload }

  case Types.GET_ACTION_MOVIES:
    return { ...state, ActionMovies: payload }

  case Types.GET_COMEDY_MOVIES:
    return { ...state, ComedyMovies: payload }

  case Types.GET_HORROR_MOVIES:
    return { ...state,  HorrorMovies: payload }

  case Types.GET_ROMANCE_MOVIES:
    return { ...state, RomanceMovies: payload }

  case Types.GET_DOCUMENTARIES_MOVIES:
    return { ...state, Documentaries: payload }
  
  case Types.SET_MOVIES_DETAIL:
      return { ...state, MoviesDetail: payload }  
  
  case Types.GET_SEARCH_MOVIES:
      return { ...state, SearchMovies: payload }     

  default:
    return state
  }
}

export default reducerMovies