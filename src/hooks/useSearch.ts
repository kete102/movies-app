import { useState, useRef, useEffect } from 'react'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstSearch = useRef(true)

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError('')
  }, [search])

  return { search, setSearch, error }
}
