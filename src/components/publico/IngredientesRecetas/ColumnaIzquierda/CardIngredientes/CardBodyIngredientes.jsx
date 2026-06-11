import Ingrediente from './Ingrediente'
const CardBodyIngredientes = ({ingredientes}) => {
  return (
    <div className="card-body p-3">
      {ingredientes?.map((ing, pos) => (<Ingrediente key={pos} ing={ing}/>))}
    </div>
  )
}

export default CardBodyIngredientes