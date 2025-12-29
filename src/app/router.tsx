import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../components/layout/AppLayout"
import Home from "./Home"
import Explore from "./Explore"
import Profile from "./Profile"

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
])
