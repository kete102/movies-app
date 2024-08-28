import { Movie } from '../types'
import { MovieItem } from './MovieItem'

export const MoviesList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {movies.length > 0 &&
          movies.map((movie) => (
            <div
              key={movie.id}
              className="col-sm-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <MovieItem movie={movie} />
            </div>
          ))}
      </div>
    </div>
  )
}
