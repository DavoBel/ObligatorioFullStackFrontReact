const CardFooter = ({presupuesto}) => {
  return (
    <div className="card-footer text-body-secondary">Presupuesto: ${presupuesto.toFixed(2)}</div>
  )
}


export default CardFooter