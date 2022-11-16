import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

export function AuthenticatedRoute({ children }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to="/login" />
    }

    return children;


}
