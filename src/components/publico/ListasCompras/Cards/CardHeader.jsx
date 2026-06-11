import { Link } from "react-router"
import api from "../../../../api/api"
import { useDispatch } from "react-redux"
import { setListaAModificar, eliminarLista } from "../../../../features/ListaComprasSilce"

const CardHeader = ({ nombre, lista }) => {
  const dispatch = useDispatch();

  const cargarListaAModificar = ()=>{
    dispatch(setListaAModificar(lista));
  }

  const borrarLista = () =>{
    api.delete(`/listas/${lista._id}`).then(r=>{
      dispatch(eliminarLista({ listaId: lista._id }))
    }).catch(e => console.log(e));
  }
  
  return (
    <div className="card-header position-relative text-center">
      {nombre}
      <div className="position-absolute end-0 top-50 translate-middle-y me-2 d-flex gap-1">
        <Link to={`/listas/Editar`} onClick={cargarListaAModificar} className="btn btn-sm btn-secondary"><i className="bi bi-pencil" /></Link>
        <Link onClick={borrarLista} className="btn btn-sm btn-danger"><i className="bi bi-trash" /></Link>
      </div>
    </div>
  )
}

export default CardHeader