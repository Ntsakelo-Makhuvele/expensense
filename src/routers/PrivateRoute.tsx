import { Navigate } from "react-router-dom";
import { useAuth } from "../authentication/AuthContext";

const PrivateRoute = ({children}:any) => {
    const {user,loading} = useAuth();
    if(loading) return <div>...Loading</div>
    return user ? children : <Navigate to="/login" />  
}

export default PrivateRoute;