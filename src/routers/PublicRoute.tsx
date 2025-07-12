import { Navigate } from "react-router-dom";
import { useAuth } from "../authentication/AuthContext";

const PublicRoute = ({children}:any) => {
    const {user,loading} = useAuth();
    if(loading) return <div>...Loading</div>
    return user ? <Navigate to="/dashboard" /> : children;
}

export default PublicRoute;