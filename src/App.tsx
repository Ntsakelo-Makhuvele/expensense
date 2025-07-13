import { AuthProvider } from "./authentication/AuthContext"
import AppRoutes from "./routers/AppRoutes"


function App() {
  return (
    <AuthProvider>
     <AppRoutes />
     </AuthProvider>
  )
}

export default App
