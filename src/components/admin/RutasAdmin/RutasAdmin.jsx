import { Navigate, Outlet } from "react-router";
import { getRol } from "../../../api/api";

const RutasAdmin = () => {
    if(getRol().toUpperCase() != "ADMIN")return <Navigate to="/listas" replace />;
    return <Outlet />;
};


export default RutasAdmin;