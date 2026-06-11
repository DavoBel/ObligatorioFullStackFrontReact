import { Link } from "react-router"

const HeaderProductos = () => {
  return (
    <div className="p-3 pb-0">
        <h4 className="mb-3">Productos</h4>
        <div className="text-center mb-3">
            <Link to={`/Productos/Nuevo`} className="btn btn-sm px-3 text-white btn-nuevo-admin"><i className="bi bi-plus-lg me-1" /> Nuevo producto</Link>
        </div>
    </div>
  )
}

export default HeaderProductos