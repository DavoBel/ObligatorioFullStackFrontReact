import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import api from '../../../../api/api';
import { useDispatch } from 'react-redux';
import { agregarLista } from '../../../../features/ListaComprasSilce'
import { useNavigate } from 'react-router';
import { joiResolver } from '@hookform/resolvers/joi';
import { validarLista } from '../../../../validators/lista.validators';

const FormAgregarLista = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver:joiResolver(validarLista)
  });
  const dispatch = useDispatch();
  const navegate = useNavigate();

  const onSubmit = data => {
    const body = { nombre: data.nombre, presupuesto: data.presupuesto }
    api.post(`/listas`, body)
      .then(r => {
        dispatch(agregarLista(r.data));
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

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary w-100">Crear lista</button>
      </div>
    </form>
  );
}

export default FormAgregarLista;