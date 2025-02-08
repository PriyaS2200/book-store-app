import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";
export const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(isAuthenticated)
    return (
        <div className="navbar-container">
        <NavLink to="/" className="nav-content">Home</NavLink>
        <NavLink to="/books" className="nav-content">Books</NavLink>
        {isAuthenticated == true ? 
        <button onClick={() => { logout()}} className="nav-btn">Logout</button>    : 
        <button onClick={() => navigate("/login")} className="nav-btn">Login</button>
    }
        </div>
    )
}