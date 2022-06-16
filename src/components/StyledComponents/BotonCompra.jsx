import styled from "styled-components";

const BotonCompra = styled.button`
  color: white;
  background-color: palevioletred;
  font-size: 1em, bolder;
  margin: 1em;
  padding: 0.25em 1em;
  border: 4px solid afafaf;
  border-radius: 15px;
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 200ms ease-in-out, color 200ms ease-in-out;
  :hover {
      box-shadow: 0 0 40px 40px #dd5570 inset;
      transform: scale(1.1)
   }`

export default BotonCompra;
