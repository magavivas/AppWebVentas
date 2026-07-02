import Categories from "../../components/Categories/Categories";
import ProductCatalog from "../../components/ProductCatalog/ProductCatalog";
import { productos } from "../../data/productos";
import "./Home.css";

// searchTerm -> será el texto que escriba el usuario
function Home({ searchTerm, selectedCategory, onSelectCategory }) {
  // Set elimina repetidos y nos devuelve, de cada producto, las categorias SIN REPETIR

  const categories = [...new Set(productos.map((product) => product.categoria))];

  const filteredProducts = productos.filter((product) => {

    // filtrar por ESCRITO  
    const matchesSearch = product.nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // filtrar por SELECCION
    const matchesCategory =
      selectedCategory === "Todas" || product.categoria === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="home">

      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />

      <ProductCatalog products={filteredProducts} />
    </main>
  );
}

export default Home;