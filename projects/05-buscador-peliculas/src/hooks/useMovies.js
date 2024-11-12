import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef()

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search 
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch(e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies] ) 


  return { movies: sortedMovies, loading, getMovies }
}