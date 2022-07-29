import { createContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children } : any) => {
    // const [app, setApp] = useState({});
    // console.log('app', app)

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;