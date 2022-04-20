import React from 'react';
import {
  About,
  Contact, 
  Footer, 
  Home, 
  Menu, 
  Navigation
} from "./components";
import "./App.scss";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Menu/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
