import { Link, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../../../api/api'
import { setItemAModificar } from '../../../../features/ItemsSlice'
import { actualizarItem, eliminarItem } from '../../../../features/ListaComprasSilce'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Loading from '../../Loading/Loading'

const CardHeader = ({ itemId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.listasSlice.listas.find(lista=>lista._id == id)?.items);

  const ItemAModificar = (itemId) => {
    api.get(`/items/${itemId}`)
      .then(response => {
        dispatch(setItemAModificar(response.data));
      }).catch(e => console.error(e))
  }

  const deleteItem = (itemId) => {
    api.delete(`/items/${itemId}`)
      .then(() => {
        toast.error("Item eliminado");
        dispatch(eliminarItem({ listaId: id, itemId }));
      }).catch(e => console.error(e))
  }

  const marcarComoComprado = (itemId) => {
    const item = items.find(i => i._id == itemId)
    const nuevoComprado = !item.comprado;
    const body = { producto: item.producto._id, cantidad: item.cantidad, comprado: nuevoComprado, descripcion: item.descripcion }
    api.patch(`/items/${itemId}`, body)
      .then(r => {
        dispatch(actualizarItem({ listaId: id, ItemActualizado: { ...item, comprado: nuevoComprado } }))
      })
      .catch(e => console.log(e));
  }

  return (
    <div className="card-header d-flex gap-2 flex-wrap justify-content-center">
        <Link onClick={() => ItemAModificar(itemId)} to={`/ItemsLista/${id}/editar/${itemId}`} className="btn btn-sm btn-primary"><i className="bi bi-pencil" /></Link>
        <Link onClick={() => deleteItem(itemId)} className="btn btn-sm btn-danger"><i className="bi bi-trash" /></Link>
        <Link onClick={() => marcarComoComprado(itemId)} className="btn btn-sm btn-success"><i className="bi bi-check-lg" /></Link>
    </div>
  )
}

export default CardHeader