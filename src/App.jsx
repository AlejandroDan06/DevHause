import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "@src/pages/Home.jsx";
import { Integrante } from "@src/pages/Integrante.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integrante/:id" element={<Integrante />} />
    </Routes>
  );
}

export default App;
