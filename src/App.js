import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Silly from "./components/Silly";
import Home from "./components/Home";



function App() {
  return( 
    <Routes>
      <Route   path="/" element={<Home />} />
      <Route   path="/Silly" element={<Silly />} />
    </Routes>
  );
}

export default App;