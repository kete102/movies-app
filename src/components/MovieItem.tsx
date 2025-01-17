import { Calendar, Star } from "lucide-react"

function MovieItem({movie}: {movie: Movie}) {
  return (
    <article className="min-w-[320px] h-[480px]  bg-white/5 shadow-slate-200/30 p-2 flex flex-col items-start justify-between  rounded-lg shadow-lg ">
      <section>
        <img className="rounded-md w-full h-48 object-cover" src={movie.poster ? movie.poster : ''} alt={movie.title} />
        <h5 className="text-2xl  mt-2 font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">{movie.title}</h5>
        <p className="text-pretty text-zinc-300 font-normal truncate w-full line-clamp-3">{movie.overview}</p>
      </section>
      <div className="mt-1">
        <section className="flex flex-wrap tracking-tighter mb-3  items-center gap-x-2">
          {movie.genre.map((genre, index) => (
            <p key={index} className="font-semibold text-md rounded-full  text-zinc-600 ">#{genre}</p>
          ))}
        </section>
        <section className="flex items-center w-full gap-4 mt-2">
          <h6 className="font-bold gap-1 inline-flex items-center">
            <Calendar/>
            {movie.releaseDate}
          </h6>
          <h6 className="font-bold gap-1 text-yellow-500 inline-flex items-center">
            <Star stroke="#eab308"/>
            {movie.rating.toPrecision(1)}
          </h6>
        </section>
      </div>
    </article>
  )
}

export default MovieItem
