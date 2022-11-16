import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

export function NonAuthenticatedGuard({ children }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (user) {
         //navigate('/vehicle-list'); 
         return <Navigate to="/vehicle-list" />;
    }

    return children;

}