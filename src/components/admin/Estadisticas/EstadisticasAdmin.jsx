import { useEffect, useState } from "react"
import ChartListas from "./ChartListas"
import ChartProductos from "./ChartProductos"
import api from "../../../api/api"
import { useDispatch, useSelector } from "react-redux"
import { setOpciones, setListasDatos, setProductosDatos } from "../../../features/EstadisticasSlice"
import '../../../Estilos/admin/Estadisticas/Estadisticas.css'
import Loading from "../../publico/Loading/Loading"

const EstadisticasAdmin = () => {

  const dispatch = useDispatch();
  const opciones = useSelector((state) => state.EstadisticasSlice.opciones);
  const ListasDatos = useSelector((state) => state.EstadisticasSlice.ListasDatos);
  const ProductosDatos = useSelector((state) => state.EstadisticasSlice.ProductosDatos);
  const [loadingListas, setLoadingListas] = useState(true); 
  const [loadingProducto, setLoadingProducto] = useState(true); 

  useEffect(()=>{
      api.get(`/listas/obtenerUsoXMes`).then(r=>{
        dispatch(setOpciones(r.data.meses));
        dispatch(setListasDatos(r.data.cantidades));
      }).catch(e=>console.error("listas error", e))
      .finally(() => setLoadingListas(false));
      api.get(`/items/obtenerUsoXMes`).then(r=>{
        dispatch(setProductosDatos(r.data.cantidades));
      }).catch(e=>console.error("items error", e))
      .finally(() => setLoadingProducto(false));
  },[])

  if (loadingListas || loadingProducto){
    return(
      <div className="card shadow-sm estadisticas-card">
        <div className="card-body p-0">
          <div className="estadisticas-header p-3 pb-0">
            <h4 className="mb-3">Estadisticas</h4>
          </div>
          <Loading/>
        </div>
      </div>
    )
  }

  return (
    <div className="card shadow-sm estadisticas-card">
      <div className="card-body p-0">
        <div className="estadisticas-header p-3 pb-0">
          <h4 className="mb-3">Estadisticas</h4>
        </div>
        <div className="estadisticas-grid">
          <div className="chart-card">
            <ChartListas/>
          </div>
          <div className="chart-card">
            <ChartProductos/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstadisticasAdmin
