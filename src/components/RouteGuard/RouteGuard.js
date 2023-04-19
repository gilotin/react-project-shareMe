import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export function RouteGuard({ children }) {
    const { isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated) {
        return <Navigate to='/login' />;
    }

    return children ? children : <Outlet/>
}
