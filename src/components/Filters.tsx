
function Filters() {
  return (
    <div className="flex items-center">
      <label htmlFor="hs-default-checkbox" className="text-lg text-gray-500 mr-3 dark:text-neutral-400">Order (A-Z)</label>
      <input type="checkbox" className="shrink-0  border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox"/>
    </div>
  )
}

export default Filters
