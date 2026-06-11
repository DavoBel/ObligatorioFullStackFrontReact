import { Navigate, Outlet } from "react-router";
import { getRol } from "../../../api/api";

const RutasProtegidas = () => {
    const isAuth = localStorage.getItem("token") !== null;

    if (!isAuth || (getRol().toUpperCase() != "ADMIN" && getRol().toUpperCase() != "CLIENTE")) return <Navigate to="/" replace />;

    return <Outlet />;
};

export default RutasProtegidas;