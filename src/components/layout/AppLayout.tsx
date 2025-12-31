import { Outlet } from "react-router-dom"; // necesario para nested routes
import BottomNav from "./BottomNav";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-teal-500">

      {/* Aquí luego pondrás tu BottomNav */}
      <main className="flex-1">
        <Outlet /> {/* Esto renderiza las rutas hijas */}
      </main>

      
     <BottomNav />
    </div>
  );
}
