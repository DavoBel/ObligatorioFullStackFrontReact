import Opciones from "./Opciones"
import "../../../Estilos/admin/Sidebar/Sidebar.css"
import {Outlet} from "react-router"

const Sidebar = () => {
  return (
    <div className="admin-layout">
      <nav className="admin-sidebar text-white p-3" style={{ width: 220 }}>
        <h6 className="text-uppercase text-secondary mb-4 small fw-bold px-2">Panel Admin</h6>
        <Opciones/>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
    
  )
}

export default Sidebar