import { Movie } from '../types'

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
              <article className="card text-bg-dark h-100">
                <img
                  className="card-img-top"
                  src={movie.poster}
                  alt={movie.title}
                />
                <div className="card-body">
                  <strong className="card-title">{movie.title}</strong>
                  <p className="card-text">{movie.year}</p>
                </div>
              </article>
            </div>
          ))}
      </div>
    </div>
  )
}
