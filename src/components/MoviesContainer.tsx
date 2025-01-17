import { useMoviesContext } from "../hooks/useMoviesContext"
import Filters from "./Filters"

function MoviesContainer() {
  const {movies} = useMoviesContext()

  if(!movies) {
    return (
    <div className="w-full h-full flex items-center justify-center ">
        <h3>Search  movies</h3>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col p-2 overflow-y-scroll">
      <section className="w-full flex justify-end px-2">
        <Filters />
      </section>
      <section className="flex-1">
        {movies.map((movie: Movie) => (
        <article key={movie.id}>
            <h1>{movie.title}</h1>
          </article>
        ))}
      </section>
    </div>
  )
}

export default MoviesContainer
