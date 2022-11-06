import React from "react";
import Title from './components/title';
import Navbar from "./components/navbar";
import Body from './components/pages/home';
import Contact from "./components/pages/contact";
import About from './components/pages/about';
import Footer from './components/footer';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Title/>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Body/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
