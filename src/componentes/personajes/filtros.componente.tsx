import { useState } from 'react';
import './filtros.css';
import { useAppDispatch } from '../../redux/hooks';
import { getPersonajeByName } from '../../redux/FiltroSlice';

const Filtros = () => {

    

    const [filtro, setFiltro] = useState("")
    const dispatch = useAppDispatch()

    const onFiltrar = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFiltro(e.target.value)       
        dispatch(getPersonajeByName(filtro))
    }


    return <div className="filtros">
        <label >Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" onChange={(e)=> onFiltrar(e)} />
    </div>
}

export default Filtros;