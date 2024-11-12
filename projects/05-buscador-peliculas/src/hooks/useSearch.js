import { useState, useRef, useEffect } from "react"

export function useSearch() {
  const [search, upadateSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)
  
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar un pelicula vacia')
      return
    }
    
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar un pelicula con un numero')
      return
    }
    
    setError(null)
  }, [search])

  return { search, upadateSearch, error}
}