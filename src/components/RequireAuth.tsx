import { useLocation, Navigate, Outlet, Link } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";
import useAuth from "../hooks/Auth";

const RequireAuth = ({ allowedRoles } : any) => {
    const auth = useAuth();
    const location = useLocation();
    console.log("auth", auth);
    return (
        // <AuthContext.Consumer>
        //     {value => value.auth.authorized ? <Outlet></Outlet> : <Navigate to="/login" state={{ from: location }} />}
        // </AuthContext.Consumer>
        auth?.auth.authorized === true
            ? <Outlet />
            : auth?.auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;