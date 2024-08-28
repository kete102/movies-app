import { ApiMovies, ApiResponse, Movie } from '../types'
/**
 * Base URL for the OMDB API.
 * @constant {string}
 */
const BASE_ENDPOINT_URL = 'http://www.omdbapi.com'

/**
 * API key for accessing the OMDB API, loaded from environment variables.
 * @constant {string}
 */

const apiKey = import.meta.env.VITE_API_KEY

/**
 * Maps the raw API response to an array of `Movie` objects.
 *
 * @param {ApiResponse} apiMovies - The response from the OMDB API containing raw movie data.
 * @returns {Movie[]} An array of movies with simplified properties.
 */
const mappedMovies = (apiMovies: ApiResponse): Movie[] => {
  return apiMovies.Search.map((mappedMovie: ApiMovies) => ({
    title: mappedMovie.Title,
    year: mappedMovie.Year,
    poster: mappedMovie.Poster,
    id: mappedMovie.imdbID,
  }))
}

/**
 * Fetches movies from the OMDB API based on a given title.
 *
 * @async
 * @param {string} title - The title of the movie to search for.
 * @returns {Promise<Movie[]>} A promise that resolves to an array of `Movie` objects.
 */
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
