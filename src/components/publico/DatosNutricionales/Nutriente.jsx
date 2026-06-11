const Nutriente = ({nutriente}) => {
  return (
    <div className="nutrient-row ps-3 text-muted">
        <span>{nutriente.nombre}</span>
        <span>{nutriente.valor} {nutriente.unidad}</span>
    </div>
  )
}

export default Nutriente