import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Silly from "./components/Silly";
import Home from "./components/Home";
import Bored from "./components/Bored";
import "./fonts/Merisa-gxvMY.ttf";


function App() {
  return( 
    <Routes>
      <Route   path="/" element={<Home />} />
      <Route   path="/Silly" element={<Silly />} />
      <Route   path="/Bored" element={<Bored />} />
    </Routes>
  );
}

export default App;