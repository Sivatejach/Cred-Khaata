import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ authState, children }) => {
  if (!authState) {
    // If no authState (user not logged in), redirect to login
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children (protected route)
  return children;
};

export default ProtectedRoute;
