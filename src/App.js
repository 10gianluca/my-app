import React from "react";
import { Route, Routes } from "react-router-dom";
import Silly from "./components/Silly";
import Home from "./components/Home";
import Bored from "./components/Bored";
import Board from "./components/Board";
import Uno from "./components/Uno";
import Qwinto from "./components/Qwinto";
import "./fonts/Merisa-gxvMY.ttf";
import "./fonts/IMFellDWPica-Italic.ttf"


function App() {
  return( 
    <Routes>
      <Route   path="/" element={<Home />} />
      <Route   path="/Silly" element={<Silly />} />
      <Route   path="/Bored" element={<Bored />} />
      <Route   path="/Board" element={<Board />} />
      <Route   path="/Uno" element={<Uno />} />
      <Route   path="/Qwinto" element={<Qwinto />}/>
    </Routes>
  );
}

export default App;