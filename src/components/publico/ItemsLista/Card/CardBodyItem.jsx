const CardBody = ({ item }) => {
  return (
    <div className="card-body">
        <h5 className="card-title">{item.producto.nombre}</h5>
        <p className="card-text text-muted small">{item.descripcion}</p>
        <ul className="list-unstyled small mb-2">
            <li><strong>Precio:</strong> ${item.producto.precio}</li>
            <li><strong>Cantidad:</strong> {item.cantidad}</li>
            <li><strong>Unidad:</strong> {item.unidad}</li>
            <li><strong>Comprado:</strong> {item.comprado ? <span className="badge text-bg-success">Si</span> : <span className="badge text-bg-danger">No</span>}</li>
        </ul>
    </div>
  )
}

export default CardBody