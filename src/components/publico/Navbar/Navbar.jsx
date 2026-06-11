import Opciones from "./Opciones"
import '../../../Estilos/publico/Navbar/Navbar.css'
import {Outlet} from "react-router"
const Navbar = () => {
  return (
    <div className="layout-wrapper">
      <aside className="sidebar">
        <h5 className="sidebar-title">Voy al Super!</h5>
        <Opciones/>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Navbar