import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

const RouteContext = createContext();

export function useRouteContext() {
    return useContext(RouteContext);
}

export default function RouteControl({ children }) {
    // use the hook built in to react-router-dom to get the current location
    const location = useLocation();

    // create a global state that holds the current path
    const [path, setPath] = useState(() => {
        return location.pathname.slice(1);
    });

    // another one that holds the full path
    const [fullPath, setFullPath] = useState(() => {
        return location.pathname;
    });

    // every time the dependency location changes
    // update the path and full path
    useEffect(() => {
        setPath(location.pathname.slice(1));
        setFullPath(location.pathname);
    }, [location]);

    const value = {
        path,
        fullPath,
    };

    return (
        <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
    );
}
