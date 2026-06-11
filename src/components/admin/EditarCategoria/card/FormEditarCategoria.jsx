import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCategoriaAModificar, actualizarCategoria } from "../../../../features/CategoriasSlice"
import api from '../../../../api/api';
import { joiResolver } from '@hookform/resolvers/joi';
import { categoriaSchema } from '../../../../validators/categorias.validators';

const FormEditarCategoria = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: joiResolver(categoriaSchema)
    });
    const categoriaAModificar = useSelector((state) => state.CategoriasSlice.categoriaAModificar);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = data => {
        const body = { nombre: data.nombre, descripcion: data.descripcion };
        api.put(`/categorias/${categoriaAModificar._id}`, body)
        .then(r=>{
            dispatch(actualizarCategoria({...categoriaAModificar, ...body}));
            dispatch(setCategoriaAModificar(null));
            navigate(`/Categorias`);
        }).catch(e => console.log(e));
    };


    useEffect(()=>{
        if(!categoriaAModificar)return;
        reset({
            nombre: categoriaAModificar.nombre,
            descripcion: categoriaAModificar.descripcion
        })
    },[])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold">
                    Nombre
                </label>
                <input type="text" id="nombre" className="form-control" placeholder="Nombre" {...register("nombre")} />
                {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
            </div>

            <div className="mb-4">
                <label htmlFor="descripcion" className="form-label fw-semibold">Descripción</label>
                <textarea id="descripcion" className="form-control" rows="3" placeholder="Ej: Leche, queso, yogur y derivados." {...register("descripcion")} />
                {errors.descripcion && <span className="error-message">{errors.descripcion.message}</span>}
            </div>

            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success w-100"><i className="bi bi-check-lg me-1" /> Guardar </button>
            </div>

        </form>
  );
}

export default FormEditarCategoria