import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"

const Card = ({ lista }) => {
  return (
    <div className="card text-center">
        <CardHeader nombre={lista.nombre} lista={lista}/>
        <CardBody status={lista.status} productos={lista.items.length} listaId={lista._id}/>
        <CardFooter presupuesto={lista.presupuesto}/>
    </div>
  )
}

export default Card