import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "./index.css";
import Armory from "./pages/Armory.jsx";
import Warriors from "./pages/Warriors.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/armory", element: <Armory /> },
      { path: "/warriors", element: <Warriors /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
