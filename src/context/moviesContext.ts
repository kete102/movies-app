import {createContext} from 'react'

interface Context {
  movies: Movie[] | null
  addMovies: (movies: Movie[]) => void
}

export const MoviesContext = createContext<Context | undefined >(undefined)
