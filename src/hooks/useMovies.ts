/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo,  useState } from "react"
import { fetchMovies } from "../services/movies"
import debounce from "debounce"
import { useMoviesContext } from "./useMoviesContext"

export function useMovies() {
  const [sort, setSort] = useState<boolean>(false)
  const {addMovies} = useMoviesContext()

  const getMovies = useCallback(async (title: string) => {
    if(!title) {
      console.log('No title')
      return
    }

    const newMovies = await fetchMovies({title})
    addMovies(newMovies)
  },[]
  )
  const debouncedMovies = useMemo(() => {
    return debounce(getMovies, 300)
  },[])

  return {
    getMovies: debouncedMovies,
    sort,
    setSort
  }
}
