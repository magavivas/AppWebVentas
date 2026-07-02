import Categories from "../components/Categories/Categories";
import ProductCatalog from "../components/ProductCatalog/ProductCatalog";
import { productos } from "../data/productos";

function Home() {
    return (
        <>
            <Categories
                categories={["Jeans", "Remeras", "Deportivo"]}
            />
            <ProductCatalog
                products={productos}
            />
        </>
    )
}

export default Home;