import { useNavigate } from 'react-router'
const CardBody = ({ status, productos, listaId }) => {
  const navigate = useNavigate();
  return (
    <div className="card-body">
      <h5 className="card-title">{status ? <span className="badge text-bg-success">Activa</span> : <span className="badge text-bg-danger">Cerrada</span>}</h5>
      <p className="card-text">Productos: <span className="badge text-bg-info">{productos}</span></p>
      <br/>
      <a onClick={() => navigate(`/ItemsLista/${listaId}`)} className="btn btn-primary">
        Ver productos
      </a>
    </div>

  )
}

export default CardBody