import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Matches from "./pages/Matches";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppLayout from "./components/layout/AppLayout";
import MenuCerca from "./pages/MenuCerca";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* App */}
      <Route path="/" element={<AppLayout />}>
          <Route index element={<Explore />} />
          <Route path="/cerca" element={<MenuCerca />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
