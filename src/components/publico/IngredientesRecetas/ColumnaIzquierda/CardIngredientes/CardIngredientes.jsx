import CardHeaderIngredientes from "./CardHeaderIngredientes"
import CardBodyIngredientes from "./CardBodyIngredientes"

const CardIngredientes = ({ingredientes}) => {
  return (
    <div className="card shadow-sm">
        <CardHeaderIngredientes/>
        <CardBodyIngredientes ingredientes={ingredientes}/>
    </div>
  )
}

export default CardIngredientes