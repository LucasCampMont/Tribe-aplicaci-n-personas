import { Routes, Route } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"

import Home from "./app/Home"
import Explore from "./app/Explore"
import Profile from "./app/Profile"


function App() {

  return (
    <Routes>
      <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
