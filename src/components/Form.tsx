import {  useState } from 'react'
import Search from './icons/Search'
import { useMovies } from '../hooks/useMovies'
import { useMoviesContext } from '../hooks/useMoviesContext'

function Form() {
  const {sortMovies} = useMoviesContext()
  const [value, setValue] = useState<string>('')
  const {getMovies} = useMovies()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const query = event.currentTarget.value
    setValue(query)
    getMovies(value)
  }

  return (
    <div className="relative w-full max-w-sm md:max-w-md mx-auto my-4">
      <div className="absolute top-5 start-0 flex items-center ps-3 pointer-events-none">
        <Search className='size-4'/>
      </div>
      <input 
        type="search" 
        autoFocus
        value={value}
        onChange={handleChange}
        id="default-search" 
        className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search Mockups, Logos..." 
        required />
      <div className='mt-2'>
        <label htmlFor="hs-default-checkbox" className="text-lg text-gray-500 mr-3 dark:text-neutral-400">Order (A-Z)</label>
        <input type="checkbox"  onChange={sortMovies} className="shrink-0  border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox"/>
      </div>
    </div>
  )
}

export default Form
