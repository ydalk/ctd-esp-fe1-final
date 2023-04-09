import { getAllPersonajes, getPage } from '../../redux/FiltroSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './paginacion.css';


/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    const pagina = useAppSelector(state => state.personaje.page)
    const dispatch = useAppDispatch()
    
    const anteriorPage = () => {
        
        let paginaActual = pagina - 1 
        dispatch(getPage(paginaActual))   
        dispatch(getAllPersonajes(paginaActual))
    }
    
    const siguientePage = () => {
        
        let paginaActual = pagina + 1      
        dispatch(getPage(paginaActual))   
        dispatch(getAllPersonajes(paginaActual))    
    }

    
    return <div className="paginacion">
        <button disabled={pagina <= 1 ? true : false} className={"primary"} onClick={() => anteriorPage()} >Anterior</button>
        <button disabled={false} className={"primary"} onClick={() => siguientePage()} >Siguiente</button>
    </div>
}

export default Paginacion;