/* eslint-disable react/prop-types */
import { Filter } from "./Filter"

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>React Shop</h1>
      <Filter onChange={changeFilters}/>
    </header>
  )
}