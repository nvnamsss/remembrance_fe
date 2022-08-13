import { useLocation, Navigate, Outlet } from "react-router-dom";
import {useAuthState} from "../contexts/Auth";

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuthState();
  let location = useLocation();

  if (!auth["user"]) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    console.log("hi mom");
    return (
      <Outlet></Outlet>
    )
  }
}

export default RequireAuth;