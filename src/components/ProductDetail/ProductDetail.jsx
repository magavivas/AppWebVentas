import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { productos } from "../../data/productos";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import SizeSelector from "../../components/SizeSelector/SizeSelector";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import "./ProductDetail.css";

function ProductDetail({ onAddToCart }) {
  const { id } = useParams();

  const product = productos.find((item) => item.id === Number(id));

  // para la elección del talle
  const [selectedSize, setSelectedSize] = useState("");
  // para la cantidad
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="product-detail product-detail--empty">
        <h1>Producto no encontrado</h1>
        <Link to="/">Volver al inicio</Link>
      </main>
    );
  }

  const subtotal = product.precio * quantity;

  function handleAddToCart() {
    if (!selectedSize) {
      alert("Elegí un talle antes de agregar el producto.");
      return;
    }

    onAddToCart({
      productId: product.id,
      nombre: product.nombre,
      precio: product.precio,
      imagen: product.imagenes[0],
      talle: selectedSize,
      cantidad: quantity,
      subtotal,
    });
  }

  return (
    <main className="product-detail">
      <ProductGallery images={product.imagenes} productName={product.nombre} />

      <section className="product-detail__info">
        <p className="product-detail__category">{product.categoria}</p>
        <h1>{product.nombre}</h1>
        <p className="product-detail__price">${product.precio}</p>
        <p className="product-detail__description">{product.descripcion}</p>

        <SizeSelector
          sizes={product.talles} // Lista de los talles
          selectedSize={selectedSize} // Valor actual del estado
          onSelectSize={setSelectedSize} // Función que cambia el estado
        />

        <QuantitySelector quantity={quantity} onChangeQuantity={setQuantity} />

        <button className="product-detail__button" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </section>
    </main>
  );
}

export default ProductDetail;