import "./QuantitySelector.css";

// cuando el usuario seleccione el + se hace onChangeQuantity(quantity+1)
function QuantitySelector({ quantity, onChangeQuantity }) {
  function decreaseQuantity() {
    if (quantity > 1) {
      onChangeQuantity(quantity - 1);
    }
  }

  return (
    <div className="quantity-selector">
      <p>Cantidad</p>

      <div className="quantity-selector__control">
        <button type="button" onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button type="button" onClick={() => onChangeQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
}

export default QuantitySelector;