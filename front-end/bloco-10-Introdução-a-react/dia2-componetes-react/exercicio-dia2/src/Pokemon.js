import React, { Component } from 'react'


export class Pokemon extends Component {
  render() {
    const { nome, tipo, peso, imagem } = this.props;
    return (
      <>
      <h1>{nome}</h1>
      <h1>{tipo}</h1>
      <p>{peso}</p>
      <img src={imagem}></img>
      </>
    )
  }
}

export default Pokemon