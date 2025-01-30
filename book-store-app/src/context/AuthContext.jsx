import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") ? true : false);
    const [token, setToken] = useState(null);
    const navigate = useNavigate;

    const login = (token) => {
        console.log(token);
        setIsAuthenticated(true);
        setToken(token);
        localStorage.setItem("token", token);
        navigate("/")
    }

    const logout = () => {
        setIsAuthenticated(false);
        setToken(null);
        localStorage.removeItem("token");
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
