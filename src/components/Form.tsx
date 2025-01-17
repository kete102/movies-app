import { useState } from 'react'
import Search from './icons/Search'

function Form() {
  const [value, setValue] = useState<string>('')
  return (
    <form className="w-full max-w-lg mx-auto">   
      <label htmlFor="default-search" className="mb-2 text-md font-medium text-gray-100 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className='size-4'/>
        </div>
        <input 
          type="search" 
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          id="default-search" 
          className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Search Mockups, Logos..." 
          required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>
  )
}

export default Form
