import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails"; // importa o novo componente
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contato", element: <Contact /> },
      { path: "/blog/servicos/:slug", element: <ServiceDetails /> }, // rota dinâmica
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
