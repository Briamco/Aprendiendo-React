/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/Movies'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'


function App() {
  const [sort, setSort] = useState(false)

  const { search, upadateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search);
      getMovies({ search })
    }, 300)
  , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  
  const handleSort = () => {
    setSort(!sort)
  }
  
  const handleChange = (event) => {
    const newSearch = event.target.value
    upadateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder="Avengers, Star Wars, ..."/>
          <input type="checkbox" onClick={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Carganado...</p> : <Movies movies={movies}/>
        }
      </main>

    </div>
  )
}

export default App
