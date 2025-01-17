import { useState } from 'react'
import Search from './icons/Search'
import { useMovies } from '../hooks/useMovies'

function Form() {
  const {getMovies} = useMovies()
  const [value, setValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const query = event.currentTarget.value
    setValue(query)
    getMovies(query)
  }

  return (
    <div className="relative w-full max-w-md mx-auto my-4">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search className='size-4'/>
      </div>
      <input 
        type="search" 
        value={value}
        onChange={handleChange}
        id="default-search" 
        className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search Mockups, Logos..." 
        required />
    </div>
  )
}

export default Form
