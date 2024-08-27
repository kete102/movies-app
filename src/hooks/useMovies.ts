/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useRef, useState } from 'react'
import { Movie } from '../types'
import { fetchMovies } from '../services/movies'
import debounce from 'just-debounce-it'

export function useMovies({ search, sort }: { search: string; sort: boolean }) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const previousSearch = useRef(search)

  // const debouncedFetchMovies = useCallback(
  //   debounce(async (searchTerm: string) => {
  //     setLoading(true)
  //     const fetchedMovies = await fetchMovies(searchTerm)
  //     setMovies(fetchedMovies)
  //     setLoading(false)
  //   }, 300), // 300ms de debounce
  //   []
  // )

  // Funcion que usa debounce para hacer el fetch
  const getMovies = useCallback(
    async ({ search }: { search: string }): Promise<void> => {
      if (search === previousSearch.current) return
      console.log('Prev Search' + previousSearch)
      console.log('Search' + search)

      setLoading(true)
      previousSearch.current = search
      const fetchedMovies = await fetchMovies(search)
      setMovies(fetchedMovies)
      setLoading(false)
    },
    []
  )

  const getDebouncedMovies = useCallback(
    debounce((search: string) => {
      getMovies({ search })
    }, 300),
    [getMovies]
  )

  const sortedMovies = useMemo(
    () =>
      sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies,
    [sort, movies]
  )

  return { movies: sortedMovies, loading, getMovies: getDebouncedMovies }
}
