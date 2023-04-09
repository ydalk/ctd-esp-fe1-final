import { useDispatch } from "react-redux";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector } from "../redux/hooks";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const favoritos = useAppSelector(state => state.personaje.favoritos)

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes data = {favoritos}/>
    </div>
}

export default PaginaFavoritos