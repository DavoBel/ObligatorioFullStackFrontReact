import HeaderCategorias from './HeaderCategorias'
import BodyCategorias from './BodyCategorias'
import '../../../Estilos/admin/Categorias/Categorias.css'
import Paginacion from '../../publico/paginacion/Paginacion'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../../features/CategoriasSlice'

const CategoriasPrincipal = () => {
  const page = useSelector(state => state.CategoriasSlice.page);
  const dispatch = useDispatch();

  const paginaSiguiente = () =>{
    dispatch(setPage(page + 1))
  }
  const paginaAnterior = () => {
    dispatch(setPage(Math.max(1, page - 1)));
  }

  return (
    <div className="card shadow-sm">
        <div className="card-body p-0">
            <HeaderCategorias/>
            <BodyCategorias/>
        </div>
        <div className="d-flex justify-content-center py-2">
            <Paginacion page={page} anteriror={paginaAnterior} siguiente={paginaSiguiente}/>
        </div>
    </div>
  )
}

export default CategoriasPrincipal