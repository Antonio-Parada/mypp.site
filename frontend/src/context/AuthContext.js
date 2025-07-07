import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Could store user details like name, email, profile pic

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    // In a real app, you'd store tokens (e.g., JWT) in localStorage/sessionStorage here
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    // In a real app, you'd clear tokens from localStorage/sessionStorage here
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