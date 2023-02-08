import React from 'react';
import './App.css';                      
import Navbar from './Components/navbar/Navbar';
import Section1 from './Components/section1/section1';
import Section2 from './Components/section2/section2';
import Section3 from './Components/section3/section3';
import Section4 from './Components/section4/section4';



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </React.Fragment>
  );
}

export default App;
