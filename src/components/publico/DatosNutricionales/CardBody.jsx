import Calorais from "./Calorais"
import Nutriente from "./Nutriente"
import { data, useParams } from "react-router"
import { useEffect, useState } from "react"
import api from "../../../api/api"
import Loading from '../Loading/Loading'

const ListaNutricion = () => {

  const [producto, setProducto] = useState(null);
  const [datos, setDatos] = useState(null);
  const [cal, setCal] = useState(null);
  const [loadingProducto, setLoadingProducto] = useState(true);
  const [loadingDatos, setLoadingDatos] = useState(true);
  const {id} =  useParams();

  useEffect(()=>{
      api.get(`/productos/${id}`)
      .then(r => setProducto(r.data))
      .catch(e => console.log(e))
      .finally(() => setLoadingProducto(false));
      api.get(`/ia/DatosNutricionales?productID=${id}`)
      .then(r => { setCal(r.data.nutrientes[0]); setDatos(r.data); })
      .catch(e => console.log(e))
      .finally(() => setLoadingDatos(false));
  }, [])

  if (loadingProducto || loadingDatos) return<><Loading/></>

  return (
    <div className="card-body">
        <h4 className="fw-bold mb-0">{producto.nombre}</h4>
        <p className="text-muted small mb-3">{datos.porcion}</p>
        <hr className="border-dark border-2 mt-0" />
        <Calorais cal = {cal}/>
        {datos.nutrientes?.slice(1).map((nutri, pos) => (<Nutriente key={pos} nutriente = {nutri}/>))}
    </div>

  )
}

export default ListaNutricion