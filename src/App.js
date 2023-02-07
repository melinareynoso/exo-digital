import React from 'react';
import './Styles/App.css';                      
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
