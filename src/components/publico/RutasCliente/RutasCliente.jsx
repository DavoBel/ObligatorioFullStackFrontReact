import { Navigate, Outlet } from "react-router";
import { getRol } from "../../../api/api";

const RutasCliente = () => {
        if(getRol().toUpperCase() != "CLIENTE")return <Navigate to="/Usuarios" replace />;
    return <Outlet />;
};


export default RutasCliente;