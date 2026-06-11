import CardIngredientes from "./CardIngredientes/CardIngredientes"
const ColumnaIzquierda = ({ img, ingredientes }) => {
  return (
    <div className="col-12 col-lg-5">
        <img src={img} className="recipe-img shadow mb-3" alt="Chicken Fajita Mac and Cheese"/>
        <CardIngredientes ingredientes={ingredientes}/>
    </div>
  )
}

export default ColumnaIzquierda