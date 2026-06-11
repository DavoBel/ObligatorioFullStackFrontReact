import {Link} from 'react-router'
import { useNavigate } from 'react-router'

const CardFooter = ({ item }) => {
  const navegate = useNavigate();

  return (
    <div className="card-footer d-flex gap-2 flex-wrap justify-content-center">
        <Link to={`/recetas/${item.producto._id}`} className="btn btn-sm btn btn-info">Recetas <i className="bi bi-book" /></Link>
        <Link to={`/nutricion/${item.producto._id}`} className="btn btn-sm btn btn-warning">Datos Nutricionales <i className="bi bi-card-list" /></Link>
    </div>
  )
}

export default CardFooter