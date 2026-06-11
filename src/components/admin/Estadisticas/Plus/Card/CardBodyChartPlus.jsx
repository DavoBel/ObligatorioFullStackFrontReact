import CardChartDatosPlus from "./CardChartDatosPlus"

const CardBodyChart = () => {
  return (
    <div className="card-body p-0">
        <div className="estadisticas-header p-3 pb-0">
          <h4 className="mb-3">Estadisticas Plus</h4>
        </div>
        <CardChartDatosPlus/>
    </div>
  )
}

export default CardBodyChart