import Tupla from "./Tupla"
import { useEffect, useState } from "react"
import api from "../../../../../api/api"
import { useDispatch, useSelector } from "react-redux"
import { setProductos } from "../../../../../features/ProductosSlice"
import Loading from "../../../../publico/Loading/Loading"
import LoadingTabla from "../../../../publico/Loading/LoadingTabla"

const TableBody = () => {
  const productos = useSelector((state) => state.ProductosSlice.productos);
  const page = useSelector((state)=>state.ProductosSlice.page);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    api.get(`/productos?page=${page}&limit=10`)
      .then(response => dispatch(setProductos(response.data)))
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) return<><LoadingTabla/></>


  return (
    <tbody>
        {productos?.map(p=>(<Tupla key={p._id} prod={p}/>))}
    </tbody>
  )
}

export default TableBody