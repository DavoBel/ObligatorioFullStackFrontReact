import {NavLink, useNavigate} from "react-router"

const Opciones = () => {
    const CerrarSesion = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navegate('/', { replace: true })
    }

  return (
    <ul className="nav flex-column gap-1">
        <li className="nav-item">
            <NavLink to="/Usuarios" className="btn-nav d-block"><i className="bi bi-person"></i> Usuarios</NavLink>
        </li>        
        <li className="nav-item">
             <NavLink to="/Productos" className="btn-nav d-block"><i className="bi bi-box-seam"></i> Productos</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/Categorias" className="btn-nav d-block"><i className="bi bi-bookmark"></i> Categorías</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/EstadisticasAdmin" className="btn-nav d-block"><i className="bi bi-bar-chart-line"></i> Estadísticas</NavLink>
        </li>        
        <li className="nav-item mt-3">
            <NavLink onClick={CerrarSesion} to="/" className="btn-nav d-block text-danger"><i className="bi bi-box-arrow-left me-2" /> Cerrar sesión</NavLink>
        </li>
    </ul>
  )
}

export default Opciones