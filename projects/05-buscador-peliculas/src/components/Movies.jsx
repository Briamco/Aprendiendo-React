/* eslint-disable react/prop-types */
const ListOfMovies = ({ movies }) => {
  return (
    <ul className="movies">
      {
        movies.map(movies => (
          <li className="movie" key={movies.id}>
            <h3>{movies.title}</h3>
            <p>{movies.year}</p>
            <img src={movies.poster} alt={movies.title} />
          </li>
        ))
      }
    </ul>
  )
}

const NoMovies = () => {
  return (
    <p>No se encontro ninguna pelicula llamada asi</p>
    //TODO: Agregar el input del usuario envez de "asi"
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
    ? <ListOfMovies movies={movies} />
    : <NoMovies />
  )
}