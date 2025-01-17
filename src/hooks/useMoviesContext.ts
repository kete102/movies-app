import { useContext } from "react"
import { MoviesContext } from "../context/moviesContext"

export function useMoviesContext(){
  const context = useContext(MoviesContext)
  if(!context) {
    throw new Error('MoviesContext must be used within a context provider')
  }

  return {
    movies: context.movies,
    addMovies: context.addMovies,
    sortMovies: context.sortMovies
  }
}
