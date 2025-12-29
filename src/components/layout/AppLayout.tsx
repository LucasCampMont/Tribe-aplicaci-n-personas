import { Outlet } from "react-router-dom"
import BottomNav from "./BottomNav"

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      
      {/* Contenido principal */}
      <main className="flex-1 overflow-hidden bg-gray-100">
        <Outlet />
      </main>

      {/* Navegación inferior */}
      <BottomNav />
    </div>
  )
}

export default AppLayout
