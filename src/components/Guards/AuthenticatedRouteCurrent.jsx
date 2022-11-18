import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

export function AuthenticatedRouteCurrent({ children }) {

    const params = useParams();
    const { user } = useContext(AuthContext);

    if (Number(params.id) !== user.id) {
        alert('You are not authorized to edit this user!');
        return <Navigate to="/customers" />;
    }

    return children;

}