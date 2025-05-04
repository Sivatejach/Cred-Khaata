// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Ensure this is the correct path

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
