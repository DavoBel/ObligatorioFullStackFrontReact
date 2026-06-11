import CardEditarProducto from "./Card/CardEditarProducto"
import '../../../Estilos/admin/EditarProducto/EditarProducto.css'

const EditarProductoPrincipal = () => {
  return (
    <div id="contenidoPrincipal" className="p-4 d-flex justify-content-center align-items-start">
        <CardEditarProducto/>
    </div>
  )
}

export default EditarProductoPrincipal