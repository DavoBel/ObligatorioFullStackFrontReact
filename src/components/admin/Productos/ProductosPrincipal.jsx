import HeaderProductos from './Card/headerProductos'
import BodyProductos from './Card/BodyProductos'
import Paginacion from '../../publico/paginacion/Paginacion'
import '../../../Estilos/admin/Productos/Productos.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../../features/ProductosSlice'

const ProductosPrincipal = () => {

  const dispatch = useDispatch();
  const page = useSelector((state) => state.ProductosSlice.page)

  const paginaSiguiente = () =>{
      dispatch(setPage(page + 1))
    }
    const paginaAnterior = () => {
      dispatch(setPage(Math.max(1, page - 1)));
    }

  return (
    <div className="card shadow-sm">
        <div className="card-body p-0">
            <HeaderProductos/>
            <BodyProductos/>
        </div>
        <div className="d-flex justify-content-center py-2">
            <Paginacion page={page} anteriror={paginaAnterior} siguiente={paginaSiguiente}/>
        </div>
    </div>

  )
}

export default ProductosPrincipal