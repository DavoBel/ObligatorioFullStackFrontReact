import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { toast } from "react-toastify"

const api = axios.create({
    //baseURL: "http://localhost:3000/v1"
    baseURL:"https://obligatorio-full-stack-front-4czm4yblf.vercel.app/v1"
})


export const getRol = () => {
    const token = localStorage.getItem('token')

    if(token){
        const { rol } = jwtDecode(token)
        return rol;
    }
}

api.interceptors.request.use(
    (config) => {
        if (!(config.data instanceof FormData)) {
            config.headers["Content-type"] = "application/json; charset=UTF-8";
        }
        if (config.skipAuth) return config;
            const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            toast.error("No se pudo conectar con el servidor");
            return Promise.reject(error);
        }

        const mensajeBackend = error.response.data?.mensaje;

        switch (error.response.status) {
            case 400:
                toast.warn(mensajeBackend || "Datos invalidos");
                break;
            case 401:
                toast.error("Sesion expirada...", {
                    onClose: () => { window.location.href = "/login"; },
                    autoClose: 2000
                });
                localStorage.removeItem("token");
                break;
            case 422:
                toast.error(mensajeBackend || "Credenciales invalidas");
                break;
            case 403:
                toast.error(mensajeBackend || "No tenes permisos para esta accion");
                break;
            case 404:
                toast.info(mensajeBackend || "Recurso no encontrado");
                break;
            case 409:
                toast.error(mensajeBackend || "Conflicto. Elemento ya existente.");
                break;
            case 500:
                toast.error(mensajeBackend || "Error del servidor. Contacte al administrador");
                break;
            default:
                toast.error(mensajeBackend || `Error. Contacte Administrador`);
        }

        return Promise.reject(error);
    }
);

export default api;


