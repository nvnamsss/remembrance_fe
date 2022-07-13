import { useContext } from "react";
import AuthContext from "../contexts/Auth";
import { AuthenticationData, AuthProviderData } from "../dtos/Auth";

const useAuth = () => {
    return useContext<AuthProviderData>(AuthContext);
}

export default useAuth;