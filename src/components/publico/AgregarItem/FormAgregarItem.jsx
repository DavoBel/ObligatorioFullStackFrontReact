import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../../api/api'
import { setProductos } from '../../../features/ProductosSlice'
import { setItemAModificar } from '../../../features/ItemsSlice'
import { actualizarItem, agregarItem } from '../../../features/ListaComprasSilce'
import { toast } from 'react-toastify'
import { joiResolver } from '@hookform/resolvers/joi';
import { itemListaValidator } from '../../../validators/itemLista.validators';
import Loading from '../Loading/Loading';

const FormAgregarItem = () => {
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm({
    resolver:joiResolver(itemListaValidator)
  });
  const productoSeleccionado = watch("producto"); //prod a agregar
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemAModificar = useSelector(state => state.ItemsSlice.itemAModificar);
  const productos = useSelector(state => state.ProductosSlice.productos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(itemAModificar);
    if (productos.length == 0){
      api.get('/productos?page=1&limit=0')
        .then(response => dispatch(setProductos(response.data)))
        .catch(e => console.error(e))
        .finally(() => setLoading(false));
    }else {
        setLoading(false);
    }
  }, []);

  useEffect(() => {
    const producto = productos.find(p => p._id === productoSeleccionado);
    setValue("unidad", producto?.unidad ?? "");
  }, [productoSeleccionado]);

  useEffect(() => {
    if (!itemAModificar) return;
    reset({
      producto: itemAModificar.producto._id,
      cantidad: itemAModificar.cantidad,
      unidad: itemAModificar.producto.unidad,
      comprado: itemAModificar.comprado,
      descripcion: itemAModificar.descripcion
    });
  }, [itemAModificar]);



  const onSubmit = data => {
    const body = { producto: data.producto, cantidad: data.cantidad, comprado: data.comprado, descripcion: data.descripcion };
    const request = itemAModificar ?
      api.patch(`/items/${itemAModificar._id}`, body)
        .then(r => {
          dispatch(actualizarItem({listaId: id, ItemActualizado: r.data.Item}));
          dispatch(setItemAModificar(null));
          toast.info("Item actualizado");
          navigate(`/ItemsLista/${id}`);
        }).catch(e => console.error(e)):
      api.post(`/items`, { ...body, lista: id })
        .then(r =>{
          const productoCompleto = productos.find(p => p._id === data.producto);
          dispatch(agregarItem({listaId: id, nuevoItem: {...r.data, producto: productoCompleto}}));
          toast.info("Item agregado");
          navigate(`/ItemsLista/${id}`);
      }).catch(e => console.error(e));
    dispatch(setItemAModificar(null));
  };

  if (loading) return<><Loading/></>

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="producto" className="form-label fw-semibold">Producto</label>
        <select id="producto" className="form-select" {...register("producto")}>
          <option value="">Seleccionar producto...</option>
          {productos.map(p => (
            <option key={p._id} value={p._id}>{p.nombre}</option>
          ))}
        </select>
        {errors.producto && <span className="error-message">{errors.producto.message}</span>}
      </div>

      <div className="mb-3">
        <label htmlFor="unidad" className="form-label fw-semibold">Unidad</label>
        <input type="text" id="unidad" className="form-control" placeholder="Kg" disabled {...register("unidad")} />
      </div>

      <div className="mb-3">
        <label htmlFor="cantidad" className="form-label fw-semibold">Cantidad</label>
        <input type="number" id="cantidad" className="form-control" placeholder="Ej: 2" {...register("cantidad")} />
        {errors.cantidad && <span className="error-message">{errors.cantidad.message}</span>}
      </div>

      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label fw-semibold">Breve descripción</label>
        <input type="text" id="descripcion" className="form-control" maxLength="100" placeholder="Ej: Sin TACC, marca X..." {...register("descripcion")} />
        {errors.descripcion && <span className="error-message">{errors.descripcion.message}</span>}
      </div>

      <div className="mb-4">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="fueComprado" {...register("comprado")} />
          <label className="form-check-label fw-semibold" htmlFor="fueComprado">
            Fue comprado
          </label>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary w-100">Guardar</button>
      </div>
    </form>
  )
}

export default FormAgregarItem