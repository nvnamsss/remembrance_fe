import { useContext, useDebugValue } from "react";
import AppContext from "../contexts/App";

const useApp = () => {
    const app  = useContext(AppContext);
    return app;
}
export default useApp;