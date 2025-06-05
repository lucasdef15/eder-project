import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming these exist or will be created
import { Button } from '@/components/ui/button'; // Assuming this exists or will be created
import { motion } from 'framer-motion';

// Mock Card components if not available yet for testing layout
const MockCard = ({ children, className }) => (
  <div className={`border rounded-lg shadow-md p-4 ${className}`}>
    {children}
  </div>
);
const MockCardHeader = ({ children }) => <div className='mb-4'>{children}</div>;
const MockCardTitle = ({ children, className }) => (
  <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
);
const MockCardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);
const MockButton = ({ children, onClick, className }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded ${className}`}>
    {children}
  </button>
);

// Use actual components if they exist, otherwise use mocks
const ActualCard = Card || MockCard;
const ActualCardHeader = CardHeader || MockCardHeader;
const ActualCardTitle = CardTitle || MockCardTitle;
const ActualCardContent = CardContent || MockCardContent;
const ActualButton = Button || MockButton; // Use Button if available

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Login Success:', tokenResponse);
      const accessToken = tokenResponse.access_token;

      try {
        // Fetch user info using the access token
        const userInfoResponse = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const userData = {
          name: userInfoResponse.data.name,
          email: userInfoResponse.data.email,
          picture: userInfoResponse.data.picture,
        };

        // Use the login function from AuthContext
        login(userData, accessToken);

        // Redirect after successful login and context update
        navigate('/calendar');
      } catch (error) {
        console.error('Error fetching user info:', error);
        // Handle error appropriately, maybe show a message to the user
      }
    },
    onError: (errorResponse) => {
      console.error('Login Failed:', errorResponse);
      // Handle login error (e.g., show notification)
    },
    scope:
      'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
  });

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-300 p-4'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <ActualCard className='w-full max-w-sm shadow-xl rounded-2xl bg-white'>
          <ActualCardHeader>
            <ActualCardTitle className='text-center text-2xl font-bold text-emerald-800'>
              Bem-vindo!
            </ActualCardTitle>
          </ActualCardHeader>
          <ActualCardContent className='flex flex-col gap-6 items-center px-6 pb-6'>
            <p className='text-sm text-gray-600 text-center'>
              Faça login com o Google para acessar sua área de agendamentos.
            </p>
            <ActualButton
              onClick={() => handleGoogleLogin()}
              className='w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300 py-3 rounded-lg font-semibold flex items-center justify-center gap-2'
            >
              {/* Optional: Add Google Icon here */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='20'
                height='20'
                viewBox='0 0 48 48'
              >
                <path
                  fill='#FFC107'
                  d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                ></path>
                <path
                  fill='#FF3D00'
                  d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                ></path>
                <path
                  fill='#4CAF50'
                  d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                ></path>
                <path
                  fill='#1976D2'
                  d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.999,35.508,44,30.028,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                ></path>
              </svg>
              Continuar com Google
            </ActualButton>
          </ActualCardContent>
        </ActualCard>
      </motion.div>
    </div>
  );
};

export default Login;
