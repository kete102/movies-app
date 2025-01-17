import { useMoviesContext } from "../hooks/useMoviesContext"
import MovieItem from "./MovieItem"

function MoviesContainer() {
  const {movies} = useMoviesContext()

  if(!movies || movies.length === 0) {
    return (
    <div className="w-full  rounded-md flex-grow flex flex-col mt-3 items-center justify-center ">
        <h3 className="text-white bg-white/5 px-4 py-2 rounded-md font-semibold text-2xl">Search  movies</h3>
      </div>
    )
  }

  return (
    <div className="w-full grid place-content-center max-w-full rounded-md mt-3 mx-auto">
      <div className="flex p-4 flex-row overflow-x-scroll gap-x-7 scroll-m-4 snap-x snap-proximity  items-center">
        {movies.map((movie: Movie) => (
          <MovieItem movie={movie} key={movie.id}/>
        ))}
      </div>
    </div>
  )
}

export default MoviesContainer
