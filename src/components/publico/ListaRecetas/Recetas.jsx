import Card from "./Card/Card"

const Receta = ({receta}) => {
  return (
    <div className="col">
        <Card receta={receta}/>
    </div>
  )
}

export default Receta