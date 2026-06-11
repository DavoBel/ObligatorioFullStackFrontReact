import { useForm } from 'react-hook-form';
import {Link} from 'react-router'
import api from "../../../api/api"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { joiResolver } from '@hookform/resolvers/joi';
import { registroSchema } from '../../../validators/auth.validators';

const FormRegistro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(registroSchema)
    });
    const navigate = useNavigate();
    const onSubmit = data => {

        if(data.Contraseña.trim() == data.CContraseña.trim()){
            const body ={
                email: data.Email,
                nombre: data.Nombre.trim(),
                password: data.Contraseña.trim()
            }
            api.post(`/auth/registro`, body, { skipAuth: true }).then(r=>{
                localStorage.setItem("token", r.data.token);
                localStorage.setItem("user", r.data.user);
                toast.success("¡Bienvenido!");
                navigate(`/listas`);
            }).catch(e=>console.log(e))
        }else{
            toast.warning("Las contraseñas no coinciden ")
        }
    };

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} id="registroForm">
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" placeholder="Tu nombre completo" {...register("Nombre")} />
                {errors.Nombre && <span className="error-message">{errors.Nombre.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="tucorreo@ejemplo.com" {...register("Email")} />
                {errors.Email && <span className="error-message">{errors.Email.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" placeholder="Mínimo 8 caracteres" {...register("Contraseña")} />
                {errors.Contraseña && <span className="error-message">{errors.Contraseña.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="cpassword">Confirmar contraseña</label>
                <input type="password" id="cpassword" placeholder="Mínimo 8 caracteres" {...register("CContraseña")} />
                {errors.CContraseña && <span className="error-message">{errors.CContraseña.message}</span>}
            </div>
            <input id="boton" type="submit" value="Registrarse" />
            <div className="login-link">
                ¿Ya tienes cuenta? <Link to="/">Iniciá sesión aquí</Link>
            </div>
        </form>
    );
}

export default FormRegistro
