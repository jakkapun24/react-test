import { useEffect } from "react";
import {
  Navigate,
  Outlet,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import Usermanagement from './pages/Usermanagement';
import Dashboard from "./pages/Dashboard";

export default function ThemeRoutes() {
  const MainRoutes = {
    path: "",
    element: <Layouts />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/usermanagement", element: <Usermanagement /> },
    ],
  };

  return useRoutes([MainRoutes]);
}
