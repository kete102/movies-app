import './App.css'
import { useMovies } from './hooks/useMovies'
import { Filters } from './components/Filters'
import { MoviesList } from './components/MoviesList'
import { useState } from 'react'
import { useSearch } from './hooks/useSearch'

function App() {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState<boolean>(false)
  const { loading, movies, getMovies } = useMovies({ search, sort })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    getMovies(newSearch)
  }

  return (
    <div className="container mx-auto min-vh-100 d-flex flex-column">
      <header className="mt-4 text-white text-center">
        <h1 className="fs-1 fw-bold">Movies app</h1>
      </header>

      <section className="mt-5 row justify-content-center gap-3">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="input-group">
            <form onSubmit={handleSubmit} className="d-flex ">
              <input
                type="text"
                className="p-2 fs-5 form-control"
                placeholder="The Avengers, Matrix, ..."
                onChange={handleOnChange}
                value={search}
              />
              <button className="input-group-text">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          {error && <p className="text-white">{error}</p>}
        </div>
        <div className="col-12 col-md-4 col-lg-3">
          <Filters handleSort={handleSort} />
        </div>
      </section>
      <div className="mt-5">
        {loading ? <p>Loading...</p> : <MoviesList movies={movies} />}
      </div>
    </div>
  )
}

export default App
