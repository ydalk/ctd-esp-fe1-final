import { useState } from 'react';
import './filtros.css';
import { useAppDispatch } from '../../redux/hooks';
import { getAllPersonajes, getPersonajeByName } from '../../redux/FiltroSlice';

const Filtros = () => {

    const [filtro, setFiltro] = useState("")
    const dispatch = useAppDispatch()

    const onFiltrar = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFiltro(e.target.value)       
        dispatch(getPersonajeByName(filtro))
    }

    const limpiarInput = ()=>{
        setFiltro("") 
        dispatch(getAllPersonajes(1))
    }


    return <div className="filtros">
        <label >Filtrar por nombre:</label>
        <div className='inputText'>
            <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" value={filtro} onChange={(e)=> onFiltrar(e)} />
            <img className="clean" src='/imagenes/delete.png' onClick={()=>limpiarInput()} alt='borarr'></img>
        </div>
    </div>  
}

export default Filtros;