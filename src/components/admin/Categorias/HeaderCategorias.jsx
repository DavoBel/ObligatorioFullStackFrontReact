import { Link } from "react-router"
const HeaderCategorias = () => {
  return (
    <div className="p-3 pb-0">
        <h4 className="mb-3">Categorias</h4>
        <div className="text-center mb-3">
            <Link to={`/Categorias/Nueva`} className="btn btn-sm px-3 text-white btn-nuevo-admin"><i className="bi bi-plus-lg me-1" /> Nueva Categoria</Link>
        </div>
    </div>
  )
}

export default HeaderCategorias