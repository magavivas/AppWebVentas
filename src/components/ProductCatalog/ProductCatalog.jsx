import ProductCard from "../ProductCard/ProductCard";
import "./ProductCatalog.css";

function ProductCatalog({ products = [] }) {
  return (
    <section className="product-catalog" id="catalogo">
      <div className="product-catalog__header">
        <h2>Productos</h2>
        <p>{products.length} productos disponibles</p>
      </div>

      {products.length > 0 ? (
        <div className="product-catalog__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="product-catalog__empty">
          No encontramos productos para esta busqueda.
        </p>
      )}
    </section>
  );
}

export default ProductCatalog;