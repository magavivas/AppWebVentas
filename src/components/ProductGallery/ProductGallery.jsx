import { useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ images, productName }) {
  // si el usuario toca otra miniatura, la imagen grande cambia 
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="product-gallery">
      <img className="product-gallery__main" src={selectedImage} alt={productName} />

      <div className="product-gallery__thumbs">
        {images.map((image) => (
          <button key={image} type="button" onClick={() => setSelectedImage(image)}>
            <img src={image} alt={productName} />
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProductGallery;