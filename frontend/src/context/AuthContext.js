import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check localStorage for login status on initial load
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [user, setUser] = useState(() => {
    // Check localStorage for user data on initial load
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    // This effect runs once on mount to ensure state is synced with localStorage
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUser = localStorage.getItem('user');

    if (storedIsLoggedIn === 'true' && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []); // Empty dependency array means it runs once on mount

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};