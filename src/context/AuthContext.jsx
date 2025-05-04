import React, { createContext, useState, useEffect } from 'react';

// Create a context to share authState
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);

  // On mount, check if the user is saved in localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setAuthState(storedUser);
    }
  }, []);

  // Save the user to localStorage when the authState changes
  useEffect(() => {
    if (authState) {
      localStorage.setItem('user', JSON.stringify(authState));
    } else {
      localStorage.removeItem('user');
    }
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
