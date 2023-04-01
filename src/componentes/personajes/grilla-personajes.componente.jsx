import { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useDispatch } from 'react-redux';
import { getAllPersonajes, getPersonajeByName } from '../../redux/FiltroSlice';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

const GrillaPersonajes = () => {
    const dispatch = useDispatch()
    const personajes = useAppSelector(state => state.personaje.personajes)

    useEffect(() => {

        dispatch(getAllPersonajes())

    }, [])
    console.log(personajes);

    return <div className="grilla-personajes">
       {
        personajes.map((person)=>(
            <TarjetaPersonaje personaje = {person} key={person.id}/>
            ))
       }
    </div>

}
 
export default GrillaPersonajes;