import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Home from "./pages/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar
        onOpenMenu={() => setIsOpen(true)}
      />

      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/carrito" element={<h1>Carrito</h1>} />
      </Routes>
    </>
  );
}

export default App;