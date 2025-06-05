import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import Contact from './pages/Contact';
import TherapistDetails from './pages/TherapistDetails';
import Login from './pages/Login';
import CalendarPage from './pages/CallendarPage';
import { ScrollRestoration } from 'react-router-dom';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <App />
      </>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/contato', element: <Contact /> },
      { path: '/sobre', element: <TherapistDetails /> },
      { path: '/blog/servicos/:slug', element: <ServiceDetails /> },
      { path: 'calendar', element: <CalendarPage /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
