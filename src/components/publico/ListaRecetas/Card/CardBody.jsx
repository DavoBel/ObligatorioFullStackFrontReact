const CardBody = ({titulo, pais}) => {
  return (
    <div className="card-body">
        <h6 className="card-title">{titulo}</h6>
        <span className="badge bg-secondary country-badge"><i className="bi bi-geo-alt" />{pais}</span>
    </div>
  )
}
export default CardBody