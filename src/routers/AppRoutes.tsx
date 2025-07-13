import { useRoutes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "../views/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../views/Dashboard";
import Register from "../views/Register";

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path:"/login",
            element:(
                <PublicRoute>
                    <Login />
                </PublicRoute>
            )
        },
        {
            path:"/register",
            element:(
                <PublicRoute>
                    <Register />
                </PublicRoute>
            )
        },
        {
            path:"/dashboard",
            element:(
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            )
        }
    ])
    
   return routes
}

export default AppRoutes;