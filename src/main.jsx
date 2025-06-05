import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './Router.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from '@/context/AuthContext';

const clientId =
  '554267904608-fs7hff4tnp59578bjrt07i57sr975gvj.apps.googleusercontent.com';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
