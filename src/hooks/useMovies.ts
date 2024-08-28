/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useRef, useState } from 'react'
import { Movie } from '../types'
import { fetchMovies } from '../services/movies'
import debounce from 'just-debounce-it'

/**
 * Custom hook to handle movie search functionality with optional sorting.
 *
 * @param {string} search - The search term to query movies.
 * @param {boolean} sort - Determines if the movies should be sorted alphabetically by title.
 * @returns {{
 *   movies: Movie[],
 *   loading: boolean,
 *   getMovies: (search: string) => void
 * }} Returns an object with movies list, loading state, and a function to fetch movies.
 */
export function useMovies({ search, sort }: { search: string; sort: boolean }) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const previousSearch = useRef(search)

  // Function that uses debounce to avoid frequent API calls when typing
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

  // Function to debounce the getMovies call
  const getDebouncedMovies = useCallback(
    debounce((search: string) => {
      getMovies({ search })
    }, 300),
    [getMovies]
  )

  // useMemo to sort movies alphabetically by title if `sort` is true
  const sortedMovies = useMemo(
    () =>
      sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies,
    [sort, movies]
  )

  return { movies: sortedMovies, loading, getMovies: getDebouncedMovies }
}
