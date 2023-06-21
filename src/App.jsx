import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";
import ModelsCanvas from "./components/canvas/Models";
import RoboCanvas from "./components/canvas/Cuterobot";



function App() {
  return (
    <BrowserRouter>
      <ModelsCanvas />
      <Navbar />
      <Body/>
      <RoboCanvas/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
