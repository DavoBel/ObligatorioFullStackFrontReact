import { Link } from "react-router"
import api from "../../../api/api"
import { useDispatch } from "react-redux"
import { eliminarCategoria, setCategoriaAModificar } from "../../../features/CategoriasSlice"


const Tupla = ({cat}) => {
  const dispatch = useDispatch();

  const borrarCategoria = () =>{
      api.delete(`/categorias/${cat._id}`).then(r=>{
        dispatch(eliminarCategoria({catId:cat._id}));
      }).catch(e=>console.log(e));
  }

  const categoriaAModificar = () => {
    dispatch(setCategoriaAModificar(cat));
  }

  return (
    <tr>
        <td><strong>{cat.nombre}</strong></td>
        <td className="text-muted">{cat.descripcion}</td>
        <td>
          <Link to={`/Categorias/Editar`} onClick={categoriaAModificar} className="btn btn-sm btn-outline-primary me-1"><i className="bi bi-pencil"></i></Link>
          <Link to={`/Categorias`} onClick={borrarCategoria} className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></Link>
        </td>
    </tr>
  )
}

export default Tupla