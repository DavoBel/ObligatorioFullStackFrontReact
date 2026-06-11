import { useForm } from 'react-hook-form';
import { Link } from 'react-router'
import api from '../../../api/api'
import { toast } from "react-toastify"
import { useNavigate } from 'react-router'
import { getRol } from '../../../api/api';
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from '../../../validators/auth.validators';

const FormLogin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: joiResolver(loginSchema)
    });
    const navigate = useNavigate();

    const email = watch("email");
    const password = watch("password");
    
    const onSubmit = (data) => {
        const body = { email: data.email, password: data.password };
        api.post('/auth/login', body, { skipAuth: true })
        .then(r =>{
            localStorage.setItem("token", r.data.token);
            localStorage.setItem("user", r.data.user);
            toast.success("¡Bienvenido!");
            getRol()?.toUpperCase() === "ADMIN" ? navigate("/Usuarios") : navigate("/listas")
        }).catch(
            e => {
                console.error(e);
            }
        )
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
            <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="email" id="username" placeholder="tucorreo@ejemplo.com" {...register("email")} />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" placeholder="*********" {...register("password")} />
                {errors.password && <span className="error-message">{errors.password.message}</span>}
            </div>
            <input id="boton" type="submit" value="Ingresar" disabled={!email || !password}/>
            <div className="signup-link">
                ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
            </div>
        </form>
    );
}

export default FormLogin
