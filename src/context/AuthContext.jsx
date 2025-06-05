import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null); // Changed from token to accessToken
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Load token and user info from localStorage on initial load
    const savedToken = localStorage.getItem('google_access_token');
    const savedUser = localStorage.getItem('google_user');

    if (savedToken && savedUser) {
      setAccessToken(savedToken);
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        // Clear invalid data if parsing fails
        localStorage.removeItem('google_user');
        localStorage.removeItem('google_access_token');
      }
    }
    setIsLoading(false); // Finished loading initial auth state
  }, []);

  const login = (userData, token) => {
    setAccessToken(token);
    setUser(userData);
    localStorage.setItem('google_access_token', token);
    localStorage.setItem('google_user', JSON.stringify(userData));
  };

  const logout = () => {
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem('google_access_token');
    localStorage.removeItem('google_user');
    // Optionally, add Google sign-out logic here if needed
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
