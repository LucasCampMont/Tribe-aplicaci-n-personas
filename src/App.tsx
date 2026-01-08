// App.jsx
import { Routes, Route } from "react-router-dom";

// Pages
import Explore from "./pages/Explore";
import Matches from "./pages/Matches";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MenuCerca from "./pages/MenuCerca";
import Community from "./pages/Community"; // 👈 cambiar la ruta correcta

// Layout
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected / App routes */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Explore />} />
        <Route path="community" element={<Community />} />
        <Route path="cerca" element={<MenuCerca />} />
        <Route path="matches" element={<Matches />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
