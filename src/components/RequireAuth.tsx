import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/Auth";

const RequireAuth = ({ allowedRoles } : any) => {
    const auth = useAuth().auth;
    const location = useLocation();

    return (
        auth?.roles?.find((role:any) => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;