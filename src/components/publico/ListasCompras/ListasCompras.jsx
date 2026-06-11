import Card from "./Cards/Card"
import Paginacion from "../Paginacion/Paginacion"
import FiltrosListas from "./Filtros/FiltrosListas"
import '../../../Estilos/publico/ListasCompras/ListasCompras.css'
import { useEffect, useState } from "react"
import api from "../../../api/api"
import { useSelector, useDispatch } from "react-redux"
import { setListas, setPage } from "../../../features/ListaComprasSilce"
import { Link } from "react-router"
import Loading from "../Loading/Loading"


const ListasCompras = () => {

  const listas = useSelector((state) => state.listasSlice.listas);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [ordenamiento, setOrdenamiento] = useState(null);
  const page  = useSelector((state) => state.listasSlice.page)

  const paginaSiguiente = () =>{
    dispatch(setPage(page + 1))
  }
  const paginaAnterior = () => {
    dispatch(setPage(Math.max(1, page - 1)));
  }

  const xEstado = ()=>{
    setOrdenamiento("estado");
    dispatch(setPage(1));
  }

  const xNombre = ()=>{
    setOrdenamiento("nombre");
    dispatch(setPage(1));
  }

  const quitarFiltros = ()=>{
    setOrdenamiento("");
    dispatch(setPage(1));
  }

  const getUrl = () => {
    if (ordenamiento == 'estado'){
      return `listas/OrdenadasXStatus?page=${page}&limit=5`;
    } 
    if (ordenamiento == 'nombre') return `listas/OrdenadasXNombre?page=${page}&limit=5`;
    return `listas?page=${page}&limit=5`;
  };

  useEffect(() => {
    setLoading(true);
    api.get(getUrl()).then(r =>{
      dispatch(setListas(r.data));
    }).catch(e => console.error(e))
    .finally(() => setLoading(false));
  }, [page, ordenamiento]);

  if(loading) return <><Loading/></>

  return (
    <div id="contenidoPricipal" className="d-flex flex-column align-items-center p-4 gap-3">
        <Link to={'/listas/Agregar'} className="btn btn-primary mb-3"><i className="bi bi-plus"></i>Nueva lista</Link>
        <div className="d-flex gap-2">
            <FiltrosListas XEs={xEstado} XNo={xNombre} QuitarFiltros={quitarFiltros}/>
        </div>
        {listas.map(lista => (<Card key={lista._id} lista={lista}/>))}
        <div className="d-flex justify-content-center py-2">
            <Paginacion page={page} anteriror={paginaAnterior} siguiente={paginaSiguiente}/>
        </div>
    </div>
  )
}

export default ListasCompras