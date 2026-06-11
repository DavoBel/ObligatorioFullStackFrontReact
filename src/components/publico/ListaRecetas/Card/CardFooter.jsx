import { Link } from 'react-router'

const CardFooter = ({id}) => {

  return (
    <div className="card-footer">
        <Link to={`/receta/${id}`} className="btn btn-primary btn-sm w-100">Ver receta</Link>
    </div>
  )
}

export default CardFooter