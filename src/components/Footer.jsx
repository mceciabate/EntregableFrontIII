import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Title from './StyledComponents/Titulo'
import PieDePagina from "./StyledComponents/PieDePagina";

export default function Footer(){
    return (
    <PieDePagina>
        <React.Fragment>
            <Title> Made with <FontAwesomeIcon icon={faHeart}/> using <FontAwesomeIcon icon={faAtom} /> </Title>
        </React.Fragment>
    </PieDePagina>
    )
}