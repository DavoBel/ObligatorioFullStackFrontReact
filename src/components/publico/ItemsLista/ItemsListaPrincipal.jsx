import ItemsLista from "./ItemsLista"
import Paginacion from "../Paginacion/Paginacion"
import { useNavigate, useParams } from 'react-router'
import '../../../Estilos/publico/ItemsLista/ItemsLista.css'

const ItemsListaPrincipal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  return (
    <div id="contenidoPricipal" className="p-4 d-flex flex-column align-items-center">
        <button className="btn btn-primary mb-3" onClick={() => navigate(`/ItemsLista/${id}/agregar`)}><i className="bi bi-plus"></i>Nuevo producto</button>
        <ItemsLista id={id}/>
        <br/>
        <br/>
    </div>
  )
}

export default ItemsListaPrincipal