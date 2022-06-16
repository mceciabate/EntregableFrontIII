// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

import React from 'react'
import Subtitulo from './StyledComponents/Subtitulo'
import Titular from './StyledComponents/Titular'
import Contador from './StyledComponents/Contador'

export default function Cabecera({contadorInicial}) {
  return (
    <header>
        <React.Fragment>
          <Titular>Carrito de compras</Titular>
          <Subtitulo>Cantidad de productos   <Contador>{contadorInicial}</Contador></Subtitulo>
        </React.Fragment>
    </header>
  )
}
