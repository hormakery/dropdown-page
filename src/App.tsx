import React from 'react';
import Hero from './component/hero/Hero';
import Nav from './component/Nav/Nav';
import Navbar from './component/navbar/Navbar';
// import {
//   Route,
//   Routes, 
//   BrowserRouter as Router,
//   } from 'react-router-dom';

function App() {
  return (
    <>
     <Navbar/>
      <Hero/>
      {/* <Nav/> */}
     {/* <Routes>
       <Route path='/' element={<Hero/>}
     </Routes> */}
    </>
  );
}

export default App;
