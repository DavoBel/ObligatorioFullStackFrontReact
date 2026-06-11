import CardBodyEditarCategoria from "./CardBodyEditarCategoria"
import CardHeaderEditarCategoria from "./CardHeaderEditarCategoria"

const Card = () => {
  return (
    <div className="card shadow-sm form-card">
        <CardHeaderEditarCategoria/>
        <CardBodyEditarCategoria/>
    </div>
  )
}

export default Card