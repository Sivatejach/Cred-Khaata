// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    // Mock or actual authentication logic, e.g., check localStorage or session
    const storedAuth = localStorage.getItem('authState');
    if (storedAuth) {
      setAuthState(JSON.parse(storedAuth)); // Set it to the stored value
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
