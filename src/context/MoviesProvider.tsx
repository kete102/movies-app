import { useState } from "react"
import { MoviesContext } from "./moviesContext"

export const MoviesProvider = ({children} : {children: React.ReactNode}) => {
  const [movies, setMovies] = useState<Movie[] | null>(null)

  const addMovies = (movies: Movie[]) => {
    if(!movies) return 
    setMovies(movies)
  }

  return (
  <MoviesContext.Provider value={{movies, addMovies}}>
      {children}
    </MoviesContext.Provider>
  )
}
