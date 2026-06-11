import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import api from '../../../../api/api';
import { useDispatch } from 'react-redux';
import { setUsuarioAModificar, actualizarUsuario } from "../../../../features/UsuariosSlice"
import { useNavigate } from 'react-router';
import { joiResolver } from '@hookform/resolvers/joi';
import { usuarioSchema } from '../../../../validators/usuarios.validators';

const FormEditarUsuario = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver:joiResolver(usuarioSchema)
    });
    const usuarioAModificar = useSelector(state => state.UsuariosSlice.usuarioAModificar)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = data => {
        const body = { nombre: data.nombre, email: data.email };
        if (data.contraseña) body.password = data.contraseña;
        api.patch(`/usuarios/${usuarioAModificar._id}`, body)
        .then(r=>{
            dispatch(actualizarUsuario({...usuarioAModificar, ...data}))
            dispatch(setUsuarioAModificar(null));
            navigate(`/Usuarios`);
        }).catch(e=>console.log(e));
    };
  
    useEffect(()=>{
        if(!usuarioAModificar) return;
        reset({
            nombre: usuarioAModificar.nombre,
            email: usuarioAModificar.email,
            contraseña: null,
        });
    }, [])

    return (
        <form id="formEditarUsuario" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label fw-semibold">Nombre</label>
                <input type="text" className="form-control" placeholder="Ingrese el nombre completo" {...register("nombre")} />
                {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
            </div>
            <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control" placeholder="Ingrese el email" {...register("email")} />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
            <div className="mb-4">
                <label className="form-label fw-semibold">Contraseña</label>
                <input type="password" className="form-control" placeholder="Ingrese la contraseña" {...register("contraseña")} />
            </div>
            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success w-100"><i className="bi bi-check-lg me-1"></i> Guardar cambios</button>
            </div>
        </form>
  );
}

export default FormEditarUsuario
