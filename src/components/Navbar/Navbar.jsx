import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  searchTerm, // será el texto que escriba el usuario
  onSearchChange, // j je jea jean jeans
  onSearchSubmit, // se ejecuta cuando presiona Enter
  cartItemsCount = 0, 
  onOpenMenu, // Para cuando toquen los tres puntitos
}) {
  return (
    <header className="navbar">
      <div className="navbar__top">
        <button
          className="navbar__menu-button"
          type="button"
          onClick={onOpenMenu} // cuando el usuario hace click se ejecuta onOpenMenu que era para los tres puntitos
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link className="navbar__logo" to="/">
          Luna
        </Link>

        <Link className="navbar__cart" to="/carrito" aria-label="Ver carrito">
          <span className="navbar__cart-icon">🛒</span>

          {cartItemsCount > 0 && (
            <span className="navbar__cart-count">{cartItemsCount}</span> /* Tenia un valor por defecto 0 */
          )}
        </Link>
      </div>

      <form className="navbar__search" onSubmit={onSearchSubmit}>
        <input
          type="search"
          placeholder="Buscar productos"
          value={searchTerm}
          onChange={onSearchChange} // acá se van capturando cada cambio: j je jea jean jeans
        />
      </form>
    </header>
  );
}

export default Navbar;