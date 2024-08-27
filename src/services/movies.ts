import { ApiMovies, ApiResponse, Movie } from '../types'

const BASE_ENDPOINT_URL = 'http://www.omdbapi.com'
const apiKey = import.meta.env.VITE_API_KEY

const mappedMovies = (apiMovies: ApiResponse): Movie[] => {
  return apiMovies.Search.map((mappedMovie: ApiMovies) => ({
    title: mappedMovie.Title,
    year: mappedMovie.Year,
    poster: mappedMovie.Poster,
    id: mappedMovie.imdbID,
  }))
}

export const fetchMovies = async (title: string): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_ENDPOINT_URL}/?s=${title}&apikey=${apiKey}`
    )
    const data = await response.json()
    const movies = data
    return mappedMovies(movies)
  } catch (error) {
    console.error('Error fetching movies' + error)
    return []
  }
}
