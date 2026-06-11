import { useEffect, useState } from "react"
import ChartListas from "./ChartListas"
import ChartProductos from "./ChartProductos"
import api from "../../../api/api"
import { useDispatch, useSelector } from "react-redux"
import { setOpciones, setListasDatosTotales, setProductosDatosTotales } from "../../../features/EstadisticasSlice"
import "../../../Estilos/publico/Estadisticas/Estadisticas.css"
import Loading from "../Loading/Loading"

const Estadisticas = () => {

  const dispatch = useDispatch();
  const opciones = useSelector((state) => state.EstadisticasSlice.opciones);
  const ListasDatos = useSelector((state) => state.EstadisticasSlice.ListasDatosTotales);
  const ProductosDatos = useSelector((state) => state.EstadisticasSlice.ProductosDatosTotales);
  const [loadingListas, setLoadingListas] = useState(true); 
  const [loadingProducto, setLoadingProducto] = useState(true); 

  useEffect(()=>{
      api.get(`/listas/obtenerUsoXMes`).then(r=>{
        dispatch(setOpciones(r.data.meses));
        dispatch(setListasDatosTotales(r.data.cantidades));
      }).catch(e=>console.error(e))
      .finally(() => setLoadingListas(false));
      api.get(`/items/obtenerUsoXMes`).then(r=>{
        dispatch(setProductosDatosTotales(r.data.cantidades));
      }).catch(e=>console.error(e))
      .finally(() => setLoadingProducto(false));
  },[])

  if(loadingListas || loadingProducto){
    return( 
      <div className="estadisticas-page">
        <div className="card estadisticas-card">
          <div className="card-body p-0">
            <div className="estadisticas-header p-3 pb-0">
              <h4 className="mb-3">Estadisticas</h4>
            </div>
              <Loading/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="estadisticas-page">
      <div className="card estadisticas-card">
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
    </div>
  )
}

export default Estadisticas
