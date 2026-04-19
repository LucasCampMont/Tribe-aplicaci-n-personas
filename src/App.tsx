import { Routes, Route } from "react-router-dom";

// Pages
import Discover from "./pages/discover/Discover";   // antes Community
import Swipe from "./pages/swipe/Swipe";         // antes Explore
import Chat from "./pages/Chat";       // lo mantienes por ahora
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Layout
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* App */}
      <Route path="/" element={<AppLayout />}>

        {/* 🔥 Home ahora es DESCUBRIR */}
        <Route index element={<Discover />} />

        {/* Core navegación */}
        <Route path="discover" element={<Discover />} />
        <Route path="swipe" element={<Swipe />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />

      </Route>
    </Routes>
  );
}

export default App;