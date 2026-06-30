import { Link } from "react-router-dom";
import "./SidebarMenu.css";

function SidebarMenu({ isOpen, onClose, categories = [] }) {
  /* el sidebar-menu.. es una funcion de css */
  return (
    <div className={`sidebar-menu ${isOpen ? "sidebar-menu--open" : ""}`}> 
        
      <button
        className="sidebar-menu__overlay"
        type="button"
        onClick={onClose}
        aria-label="Cerrar menu"
      ></button>

      <aside className="sidebar-menu__panel">
        <div className="sidebar-menu__header">
          <h2>Menu</h2>

          <button
            className="sidebar-menu__close"
            type="button"
            onClick={onClose}
            aria-label="Cerrar menu"
          >
            ×
          </button>
        </div>

        <nav className="sidebar-menu__nav">
          <Link to="/" onClick={onClose}>
            Inicio
          </Link>

          <Link to="/carrito" onClick={onClose}>
            Carrito
          </Link>
        </nav>

        <div className="sidebar-menu__section">
          <h3>Categorias</h3>

          <div className="sidebar-menu__categories">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/?categoria=${category}`}
                onClick={onClose}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SidebarMenu;