import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoboCanvas from "../components/canvas/Cuterobot";
import ModelsCanvas from "../components/canvas/Models";
import Body from "../components/Body";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Body from "./components/Body";
// import ModelsCanvas from "./components/canvas/Models";
// import RoboCanvas from "./components/canvas/Cuterobot";

const Main = () => {
  return (
    <div className="">
      <ModelsCanvas />
      {/* <Navbar /> */}
      <Body />
      <RoboCanvas />
      <Footer />
    </div>
  );
};

export default Main;
