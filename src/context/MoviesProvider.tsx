import { useMemo, useState } from "react"
import { MoviesContext } from "./moviesContext"

export const MoviesProvider = ({children} : {children: React.ReactNode}) => {
  const [movies, setMovies] = useState<Movie[] | null>(null)
  const [sort, setSort] = useState<boolean>(false)

  const addMovies = (movies: Movie[]) => {
    if(!movies) return 
    setMovies(movies)
  }

  const sortMovies = () => {
    setSort(prev => !prev)
  }

  const sortedMovies = useMemo(() => {
    if (!movies) return []; // Devuelve un array vacío si no hay películas
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) // Ordena alfabéticamente
      : movies;
  }, [movies, sort]); // Dependencias clave: `movies` y `sort`

  return (
  <MoviesContext.Provider value={{movies: sortedMovies, addMovies, sortMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}
