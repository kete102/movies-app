import { useMemo, useState } from "react"
import { fetchMovies } from "../services/movies"
import debounce from "debounce"

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([])

  const getMovies = async (title: string) => {
    if(!title) {
      console.log('No title')
      return
    }

    const newMovies = await fetchMovies({title})
    console.log({newMovies})
    setMovies(newMovies)
  }

  const debouncedMovies = useMemo(() => {
    return debounce(getMovies, 300)
  },[])

  return {movies, getMovies: debouncedMovies}
}
