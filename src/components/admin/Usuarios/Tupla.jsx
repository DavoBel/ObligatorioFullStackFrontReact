import { Link } from "react-router"
import api from "../../../api/api"
import { useDispatch } from "react-redux"
import { eliminarUsuario, setUsuarioAModificar } from "../../../features/UsuariosSlice"

const Tupla = ({ u }) => {
  const dispatch = useDispatch();
  const borrarUsuario = () =>{
      api.delete(`/usuarios/${u._id}`).then(r=>{
        dispatch(eliminarUsuario({userId:u._id}));
      }).catch(e=>console.log(e));
  }

  const usuarioAModificar = () => {
    dispatch(setUsuarioAModificar(u));
  }
  
  return (
    <tr>
        <td>{u.email}</td>
        <td><strong>{u.nombre}</strong></td>
        {u.rol.toUpperCase() == "ADMIN"?<td><span className="badge bg-danger">{u.rol}</span></td>:
        <td><span className="badge bg-success">{u.rol}</span></td>}
        {
          u.plan.toUpperCase() == "PREMIUM"? <td><span className="badge bg-warning text-dark badge-plan">{u.plan}</span></td>:
          <td><span className="badge bg-secondary text-light badge-plan">{u.plan.toUpperCase()}</span></td>
        }
        <td>
            <Link to={`/Usuarios/Editar`} onClick={usuarioAModificar} className="btn btn-sm btn-outline-primary me-1"><i className="bi bi-pencil"></i></Link>
            <Link to={`/Usuarios`} onClick={borrarUsuario}  className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></Link>
        </td>
    </tr>
  )
}

export default Tupla