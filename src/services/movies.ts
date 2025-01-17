import {API_KEY} from '../config.ts'
import {GENRES} from '../constants.ts'

const BASE_URL = "https://api.themoviedb.org/3/search/movie"
const QUERY_OPTIONS = "include_adult=false"

const mapMovies = (movies: APIMovie[]): Movie[] => {
  const mappedMovies: Movie[] = movies.map((movie) => (
    {
      id: movie.id,
      title: movie.title,
      genre:movie.genre_ids.map(
        (genreId) => GENRES.find((genre) => genre.id === genreId)?.name || "Unknown"
      ),
      overview: movie.overview,
      poster:`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      releaseDate: movie.release_date ,
      rating: movie.vote_average,
    })
  )
  return mappedMovies
}

export async function fetchMovies({title}: {title:string}): Promise<Movie[]> {
  try {
    const response = await fetch(`${BASE_URL}?query=${title}&${QUERY_OPTIONS}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    })
    const {results} = await  response.json()
    if(!results) throw new Error("Error fetching movies")

    const movies = mapMovies(results)
    return movies
  } catch (error) {
    console.log("Error fetching movies: ", error)
    throw new Error("Error fetching movies")
  }
}
