import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(isAuthenticated)
    return (
        <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        {isAuthenticated == true ? 
        <button onClick={() => { logout()}}>Logout</button>    : 
        <button onClick={() => navigate("/login")}>Login</button>
    }
        </>
    )
}