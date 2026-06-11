import {NavLink, useNavigate} from "react-router"
import api from "../../../api/api"
import { toast } from "react-toastify"

const Opciones = () => {
    const navegate = useNavigate();
    const token = localStorage.getItem('token')

    const CambiarPlan = () => {
        api.patch(`/usuarios/plan`, {}, {headers:{Authorization: `Bearer ${token}`}})
        .then(r =>{
            toast.success("Plan Premium")
        }).catch(e => console.log(e));
    }

    const CerrarSesion = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navegate('/', { replace: true })
    }
    
  return (
    <ul className="nav flex-column gap-2">
        <li className="nav-item">
            <NavLink to="/listas" className="btn btn-primary"><i className="bi bi-card-list"></i> Listas</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/Estadisticas" className="btn btn-primary"><i className="bi bi-bar-chart-line"></i> Estadisticas </NavLink>
        </li>
        <li className="nav-item">
            <NavLink onClick={CambiarPlan} className="btn btn-primary"><i className="bi bi-arrow-up-circle"></i> Cambiar Plan</NavLink>
        </li>
        <li className="nav-item">
            <NavLink onClick={CerrarSesion} to={'/'} className="btn btn-danger"><i className="bi bi-box-arrow-left"></i> Cerrar sesión</NavLink>
        </li>
    </ul>
  )
}

export default Opciones