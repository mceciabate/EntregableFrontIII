// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
//
import ContenedorProducto from "./StyledComponents/ContenedorProducto";
import TitularPoducto from "./StyledComponents/TitularProducto";
import React from "react";
import { useState } from "react";
import ImagenProducto from "./StyledComponents/ImagenProducto";
import DescripcionProducto from "./StyledComponents/DescripcionProducto";
import StockProducto from "./StyledComponents/StockProducto";
import BotonCompra from "./StyledComponents/BotonCompra";
import swal from 'sweetalert';

export default function Item({contadorCarrito, nombre, descripcion, stock, img, property}) {
 const [productoStock, setStock] = useState(stock);
const comprar =()=>{
  setStock(prevState => prevState -1)
}
const mostrarAlerta =() =>{ swal({
  title: "Excelente elección",
  icon: "success",
  button: "Oh yeah!",
  timer: "3000"
  })
}
return (
    <ContenedorProducto>
        <React.Fragment>
          <TitularPoducto>{nombre}</TitularPoducto>
          <DescripcionProducto>{descripcion}</DescripcionProducto>
          <ImagenProducto src={img} alt={nombre}/>
          <StockProducto>En stock: <span>{productoStock > 0? productoStock: "AGOTADO"}</span></StockProducto>
          <BotonCompra disabled={productoStock === 0} property={StockProducto} onClick={() => {comprar();contadorCarrito();mostrarAlerta()}}>{productoStock === 0 ? "agotado" :"comprar"}</BotonCompra>
        </React.Fragment>
    </ContenedorProducto>
  )
}
