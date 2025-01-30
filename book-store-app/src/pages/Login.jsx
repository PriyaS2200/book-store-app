import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
             let result = await axios.post(`https://fresh-astonishing-zircon.glitch.me/login`,{
                username,password
            }
            )
            login(result.data.token);
        }catch(e) {
            console.log(e);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" 
        value={username} onChange={(e) => setUserName(e.target.value)}/>
         <input type="password" placeholder="Enter username" 
        value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value="Login" />
        </form>
        </>
    )
}