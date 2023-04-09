import { Link } from 'react-router-dom';
import { getPersonajeById, selectedPersonaje } from '../../redux/FiltroSlice';
import { useAppDispatch } from '../../redux/hooks';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */


const TarjetaPersonaje = ({personaje}) => {

    const dispatch = useAppDispatch()
  
    
    return <div className="tarjeta-personaje">
            <Link to={`/detalle/${personaje.id}`} >
                <img src={personaje?.image} alt={personaje?.name} onClick={() => dispatch(getPersonajeById(personaje.id))}/>
            </Link>
            <div className="tarjeta-personaje-body">
            <span>{personaje?.name}  </span>
                <BotonFavorito esFavorito={false}  onClick = {()=> dispatch(selectedPersonaje(personaje))} />
            </div>
        </div>
   
}

export default TarjetaPersonaje;