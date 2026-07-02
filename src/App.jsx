import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Home from "./pages/Home/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onSearchSubmit={(e) => e.preventDefault()}
        cartItemsCount={0}
        onOpenMenu={() => setIsOpen(true)}
      />

      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      
      <Routes>
        <Route path="/" element={
          <Home
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        } />

        <Route path="/carrito" element={<h1>Carrito</h1>} />
      </Routes>
    </>
  );
}

export default App;