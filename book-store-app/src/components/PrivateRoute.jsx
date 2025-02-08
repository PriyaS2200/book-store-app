import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();
    console.log(isAuthenticated);
    if (isAuthenticated == false) {
       return <Navigate to="/login" state={{from:location}} />
    } 
    return children
}