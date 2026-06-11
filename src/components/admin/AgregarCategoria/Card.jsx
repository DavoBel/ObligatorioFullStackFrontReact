import CardBody from "./CardBody"
import CardHeader from "./CardHeader"

const Card = () => {
  return (
    <div className="card shadow-sm form-card">
        <CardHeader/>
        <CardBody/>
    </div>
  )
}

export default Card