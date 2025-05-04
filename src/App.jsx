import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
//import SignUp from './components/SignUp';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        {/* You can switch between Login and SignUp based on route or state */}
        <Login />
        {/* <SignUp /> */}
      </div>
    </AuthProvider>
  );
}

export default App;
