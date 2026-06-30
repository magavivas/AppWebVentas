import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/carrito" element={<h1>Carrito</h1>} />
      </Routes>
    </>
  );
}

export default App;