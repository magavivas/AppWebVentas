import "./SizeSelector.css";

function SizeSelector({ sizes, selectedSize, onSelectSize }) {
  return (
    <div className="size-selector">
      <p>Talle</p>

      <div className="size-selector__options">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            className={selectedSize === size ? "size-selector__button--active" : ""}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;