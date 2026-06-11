import ChartListasPremium from "./ChartListasPremium"
import ChartProductosPremium from "./ChartProductosPremium"

const CardChartDatosPremium = () => {
  return (
    <div className="estadisticas-grid">
            <ChartListasPremium/>
            <ChartProductosPremium/>
        </div>
  )
}

export default CardChartDatosPremium