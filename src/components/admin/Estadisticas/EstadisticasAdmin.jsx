import { useEffect, useState } from "react"
import api from "../../../api/api"
import { useDispatch, useSelector } from "react-redux"
import { 
    setOpciones, 
    setListasDatosTotales, setProductosDatosTotales, 
    setListasDatosPlus, setProductosDatosPlus, 
    setListasDatosPremium, setProductosDatosPremium  
} from "../../../features/EstadisticasSlice"
import '../../../Estilos/admin/Estadisticas/Estadisticas.css'
import Loading from "../../publico/Loading/Loading"
import CardEstadisticasAdmin from "./Totales/CardEstadisticasAdmin"
import CardEstadisticasAdminPremium from "./Premium/CardEstadisticasAdminPremium"
import CardEstadisticasAdminPlus from "./Plus/CardEstadisticasAdminPlus"

const EstadisticasAdmin = () => {

  const dispatch = useDispatch();
  const opciones = useSelector((state) => state.EstadisticasSlice.opciones);

  //---Datos Graficas---
  const ListasDatosTotales = useSelector((state) => state.EstadisticasSlice.ListasDatosTotales);
  const ProductosDatosTotales = useSelector((state) => state.EstadisticasSlice.ProductosDatosTotales);

  const ListasDatosPlus = useSelector((state) => state.EstadisticasSlice.ListasDatosPlus);
  const ProductosDatosPlus = useSelector((state) => state.EstadisticasSlice.ProductosDatosPlus);

  const ListasDatosPremium = useSelector((state) => state.EstadisticasSlice.ListasDatosPremium);
  const ProductosDatosPremium = useSelector((state) => state.EstadisticasSlice.ProductosDatosPremium);
  //---Datos Graficas---

  const [loadingListas, setLoadingListas] = useState(true); 
  const [loadingProducto, setLoadingProducto] = useState(true); 

  useEffect(()=>{
      api.get(`/listas/obtenerUsoXMesAdmin`).then(r=>{
        dispatch(setOpciones(r.data.meses));
        dispatch(setListasDatosTotales(r.data.total));
        dispatch(setListasDatosPlus(r.data.plus));
        dispatch(setListasDatosPremium(r.data.premium));
      }).catch(e=>console.error(e))
      .finally(() => setLoadingListas(false));

      api.get(`/items/obtenerUsoXMesAdmin`).then(r=>{
        dispatch(setOpciones(r.data.meses));
        dispatch(setProductosDatosTotales(r.data.total));
        dispatch(setProductosDatosPlus(r.data.plus));
        dispatch(setProductosDatosPremium(r.data.premium));
      }).catch(e=>console.error(e))
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
    <div className="estadisticas-layout">
      <div className="estadisticas-totales">
        <CardEstadisticasAdmin/>
      </div>
      <div className="estadisticas-premium">
        <CardEstadisticasAdminPremium/>
      </div>
      <div className="estadisticas-plus">
        <CardEstadisticasAdminPlus/>
      </div>
    </div>
  )
}

export default EstadisticasAdmin
