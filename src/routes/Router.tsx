import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard-page";
import { Routes } from "../constants";
import ErrorPage from "../pages/error/error-page";
import InventoryPage from "../pages/inventory/inventory-page";

export const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <InventoryPage />,
  },
  {
    path: Routes.Dashboard,
    element: <Dashboard />,
  },
  {
    path: Routes.Error,
    errorElement: <ErrorPage />,
  },
]);
