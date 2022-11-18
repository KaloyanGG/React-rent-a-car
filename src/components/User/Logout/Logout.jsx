import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";

export function Logout() {

    const { userLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    userLogout();

    navigate('/vehicle-list');
    return null;

}