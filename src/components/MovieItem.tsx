import { Movie } from '../types'

export const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <article className="card text-bg-dark h-100">
      <img className="card-img-top" src={movie.poster} alt={movie.title} />
      <div className="card-body">
        <strong className="card-title">{movie.title}</strong>
        <p className="card-text">{movie.year}</p>
      </div>
    </article>
  )
}
