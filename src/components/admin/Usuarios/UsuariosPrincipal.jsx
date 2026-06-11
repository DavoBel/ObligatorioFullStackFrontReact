import HeaderUsuario from './headerUsuario'
import BodyUsuarios from './BodyUsuarios'
import Paginacion from '../../publico/paginacion/Paginacion'
import '../../../Estilos/admin/Usuarios/Usuarios.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../../features/UsuariosSlice'

const UsuariosPrincipal = () => {
  const page = useSelector(state => state.UsuariosSlice.page);
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
            <HeaderUsuario/>
            <BodyUsuarios/>
        </div>
        <div className="d-flex justify-content-center py-2">
            <Paginacion page={page} anteriror={paginaAnterior} siguiente={paginaSiguiente}/>
        </div>
    </div>
  )
}

export default UsuariosPrincipal