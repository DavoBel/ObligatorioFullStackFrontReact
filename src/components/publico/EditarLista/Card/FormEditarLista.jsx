import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import api from '../../../../api/api';
import { useDispatch } from 'react-redux';
import { actualizarLista, setListaAModificar } from '../../../../features/ListaComprasSilce'
import { useNavigate } from 'react-router';
import { joiResolver } from '@hookform/resolvers/joi';
import { validarActualizarLista } from '../../../../validators/lista.validators';

const FormEditarLista = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver:joiResolver(validarActualizarLista)
  });
  const listaAModificar = useSelector(state=>state.listasSlice.ListaAModificar)
  const dispatch = useDispatch();
  const navegate = useNavigate();

  useEffect(()=>{
    if (!listaAModificar) return;
    reset({
      nombre: listaAModificar.nombre,
      presupuesto: listaAModificar.presupuesto,
      Estado: listaAModificar.status
    });
  }, [listaAModificar])

  const onSubmit = data => {
    const body = { nombre: data.nombre, presupuesto: data.presupuesto, status: data.Estado }
    api.patch(`/listas/${listaAModificar._id}`, body)
      .then(r => {
        dispatch(actualizarLista({ listaId: listaAModificar._id, ListaActualizada: { ...listaAModificar, ...body } }));
        dispatch(setListaAModificar(null));
      }).catch(e => console.error(e));
      navegate(`/listas`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="editNombre" className="form-label fw-semibold">Nombre</label>
        <input type="text" id="editNombre" className="form-control" placeholder="Nombre de la lista" {...register("nombre")} />
        {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
      </div>

      <div className="mb-3">
        <label htmlFor="editPresupuesto" className="form-label fw-semibold">Presupuesto</label>
        <input type="number" id="editPresupuesto" className="form-control" min="0" step="1" placeholder="Ej: 1000" {...register("presupuesto")} />
        {errors.presupuesto && <span className="error-message">{errors.presupuesto.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="editEstado" className="form-label fw-semibold">Estado</label>
        <select id="editEstado" className="form-select" {...register("Estado")}>
          <option value="true">Activa</option>
          <option value="false">Inactiva</option>
        </select>
        {errors.Estado && <span className="error-message">{errors.Estado.message}</span>}
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary w-100">Guardar cambios</button>
      </div>
    </form>
  );
}

export default FormEditarLista;