import Tupla from "./Tupla"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cargarCategorias } from "../../../features/CategoriasSlice"
import api from "../../../api/api"
import LoadingTabla from "../../publico/Loading/LoadingTabla"

const TableBody = () => {
  
  const dispatch = useDispatch();
  const categorias = useSelector((state) =>  state.CategoriasSlice.categorias)
  const page = useSelector((state) => state.CategoriasSlice.page)
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    api.get(`/categorias?page=${page}&limit=10`).then(r=>{
      dispatch(cargarCategorias(r.data))
    }).catch(e=>console.log(e))
    .finally(() => setLoading(false));
  }, [page])

  if (loading) return<><LoadingTabla/></>

  return (
    <tbody>
        {categorias?.map(c => (<Tupla key={c._id} cat = {c}/>))}
    </tbody>
  )
}

export default TableBody