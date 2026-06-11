import ChartListas from "./ChartListas"
import ChartProductos from "./ChartProductos"

export const CardChartDatos = () => {
  return (
    <div className="estadisticas-grid">
            <ChartListas/>
            <ChartProductos/>
        </div>
  )
}
