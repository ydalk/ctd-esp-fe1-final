import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import {useParams} from 'react-router-dom'
import { useAppSelector } from "../redux/hooks";


/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {

    const id = useParams().id    
    
    const detalles = useAppSelector(state => state.personaje.detalle)
    
    

    return <div className="container">
        <h3>{detalles?.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={detalles?.image} alt={detalles?.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{detalles?.name}</p>
                    <p>{detalles?.origin?.name}</p>
                    <p>{detalles?.gender}</p>
                </div>
                <BotonFavorito esFavorito={false} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
           
            <TarjetaEpisodio />
            <TarjetaEpisodio />
        </div>
    </div>
}


export default PaginaDetalle
