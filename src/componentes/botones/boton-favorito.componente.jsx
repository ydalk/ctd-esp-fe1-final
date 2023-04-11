import { useState } from 'react';
import './boton-favorito.css';


/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 * @param {boolean, function}
 */
const BotonFavorito = ({esFavorito, onClick } ) => {
    
    esFavorito ? true : false

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={()=> onClick() }/>
    </div>
}

export default BotonFavorito;

