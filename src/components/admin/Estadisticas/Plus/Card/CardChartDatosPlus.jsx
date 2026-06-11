import ChartListasPlus from "./ChartListasPlus"
import ChartProductosPlus from "./ChartProductosPlus"

const CardChartDatosPlus = () => {
  return (
    <div className="estadisticas-grid">
            <ChartListasPlus/>
            <ChartProductosPlus/>
        </div>
  )
}

export default CardChartDatosPlus
