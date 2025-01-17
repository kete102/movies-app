import { useMemo } from "react"
import { fetchMovies } from "../services/movies"
import debounce from "debounce"
import { useMoviesContext } from "./useMoviesContext"

export function useMovies() {

  const {addMovies} = useMoviesContext()

  const getMovies = async (title: string) => {
    if(!title) {
      console.log('No title')
      return
    }

    const newMovies = await fetchMovies({title})
    console.log({newMovies})
    addMovies(newMovies)
  }

  const debouncedMovies = useMemo(() => {
    return debounce(getMovies, 300)
  },[])

  return { getMovies: debouncedMovies}
}
