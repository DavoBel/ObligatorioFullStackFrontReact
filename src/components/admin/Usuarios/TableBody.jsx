import Tupla from "./Tupla"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cargarUsuarios } from "../../../features/UsuariosSlice"
import api from "../../../api/api"
import LoadingTabla from "../../publico/Loading/LoadingTabla"

const TableBody = () => {

  const dispatch = useDispatch();
  const usuarios = useSelector((state) =>  state.UsuariosSlice.usuarios);
  const page = useSelector((state) => state.UsuariosSlice.page);
  const [loading, setLoading] = useState(true); 

  useEffect(()=>{
    api.get(`/usuarios?page=${page}&limit=10`).then(r=>{
      dispatch(cargarUsuarios(r.data))
    }).catch(e=>console.log(e))
    .finally(() => setLoading(false));
  }, [page])

  if (loading) return<><LoadingTabla/></>

  return (
    <tbody>
        {usuarios?.map(usuario => (<Tupla key={usuario._id} u={usuario} />))}
    </tbody>
  )
}

export default TableBody