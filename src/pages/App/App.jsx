import './App.css';
import React from 'react';
import Router from '../../Router';
import { AuthProvider } from '../../contexts/authContext';
function App() {
  return (
    <div className="App">
      < AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
