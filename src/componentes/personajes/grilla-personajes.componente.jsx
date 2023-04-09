import { useEffect } from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useDispatch } from 'react-redux';
import { getAllPersonajes} from '../../redux/FiltroSlice';
/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

const GrillaPersonajes = ({data}) => {
    
    const dispatch = useDispatch()    
   
    useEffect(() => {
        
        dispatch(getAllPersonajes(1))
        
    }, [])
    
    return <div className="grilla-personajes">
       {
           data && data?.map((person)=>(

             <TarjetaPersonaje personaje = {person} key={person?.id} />
            ))
       }
    </div>
}
 
export default GrillaPersonajes;