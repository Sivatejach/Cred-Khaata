// App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/DashBoard';
import AddCustomerForm from './components/Forms/AddCustomerForm';
import AddLoanForm from './components/Forms/AddLoanForm';
import RepaymentForm from './components/Forms/RepaymentForm';
import Contact from './components/Contact';
import Help from './components/Help';
import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const { authState } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute authState={authState}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Other Routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
