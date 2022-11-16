import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";

export function Logout() {

    const { userLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    userLogout();
    localStorage.removeItem('loggedUser');

    navigate('/vehicle-list');
    return null;

}