const Ingrediente = ({ing}) => {
  const [cantidad, nombre] = ing.split(" | ");
  return (
    <div className="ingredient-item">
        <span>{nombre}</span>
        <span className="ingredient-amount">{cantidad}</span>
    </div>
  )
}

export default Ingrediente