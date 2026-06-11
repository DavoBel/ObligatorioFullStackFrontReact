import { Link } from "react-router"
import api from "../../../../../api/api";
import { useSelector, useDispatch } from "react-redux";
import { eliminarProducto, setProductoAModificar } from "../../../../../features/ProductosSlice"

const Tupla = ({prod}) => {
  const dispatch = useDispatch();

  const productoAModificar = () =>{
    dispatch(setProductoAModificar(prod))
  }

  const borrarProducto = () => {
    api.delete(`/productos/${prod._id}`).then(r=>{
      dispatch(eliminarProducto(prod._id))
    }).catch(e=>console.log(e));
  }

  return (
    <tr>
        <td><img src={prod.imagen} className="product-img" alt="Leche"/></td>
        <td><strong>{prod.nombre}</strong></td>
        <td className="text-muted">{prod.nombreIngles}</td>
        <td>${prod.precio}</td>
        <td><span className="badge bg-info text-dark">{prod.categoria.nombre}</span></td>
        <td>{prod.unidad}</td>
        <td>
          <Link to={`/Productos/Editar`} onClick={productoAModificar} className="btn btn-sm btn-outline-primary me-1"><i className="bi bi-pencil"></i></Link>
          <Link to={`/Productos`} onClick={borrarProducto} className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></Link>
        </td>
    </tr>
  )
}

export default Tupla
