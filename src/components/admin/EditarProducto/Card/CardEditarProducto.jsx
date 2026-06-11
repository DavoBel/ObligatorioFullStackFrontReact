import CardBodyEditarProducto from "./CardBodyEditarProducto"
import CardHeaderEditarProducto from "./CardHeaderEditarProducto"

const Card = () => {
  return (
    <div className="card shadow-sm form-card">
        <CardHeaderEditarProducto/>
        <CardBodyEditarProducto/>
    </div>
  )
}

export default Card