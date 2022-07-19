import Pokemon from "./Pokemon"
import React, { Component } from 'react'
import pokemons from "./data"

export class Pokedex extends Component {
  /* const { pokemons: {name, }} = data; */
  render() {
    const todosOsPokemons = pokemons.map(({id, name, type, averageWeight, image } )=> <Pokemon key={id} nome={name} tipo={type} peso={averageWeight.value} imagem={image} />)
    return (
      <>
      {todosOsPokemons}
      </>
    )
  }
}

export default Pokedex