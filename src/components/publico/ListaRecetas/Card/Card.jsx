import CardBody from './CardBody'
import CardFooter from './CardFooter'
const Card = ({receta}) => {
  return (
    <div className="card h-100 shadow-sm meal-card">
        <img src={receta.strMealThumb} className="card-img-top" alt={receta.strMeal}/>
        <CardBody titulo={receta.strMeal} pais={receta.strCountry}/>
        <CardFooter id={receta.idMeal}/>
    </div>
  )
}

export default Card