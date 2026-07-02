import { Link } from "react-router-dom";
import "./ProductCard.css";

/* Recibe un product de este formato:
   product = {
    id: 1,
    nombre: "...",
    precio: ...
    }
    */
function ProductCard({ product }) {
  // a Intl.NumberFormat lo usamos para pasar de 25000 a $25.000 más lindo
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(product.precio);

  return (
    <article className="product-card">
      
      <Link className="product-card__image-link" to={`/producto/${product.id}`}>
        <img
          className="product-card__image"
          src={product.imagenes[0]}
          alt={product.nombre}
        />
      </Link>

      <div className="product-card__content">
        <p className="product-card__category">{product.categoria}</p>

        <h3 className="product-card__title">
          <Link to={`/producto/${product.id}`}>{product.nombre}</Link>
        </h3>

        <p className="product-card__price">{formattedPrice}</p>
      </div>
    </article>
  );
}

export default ProductCard;