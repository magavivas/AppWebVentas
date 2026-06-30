import "./Categories.css";

function Categories({
  categories = [],
  selectedCategory = "Todas",
  onSelectCategory,
}) {
  const categoriesList = ["Todas", ...categories];

  return (
    <section className="categories" aria-label="Categorias de productos">
      <div className="categories__header">
        <h2>Categorias</h2>
      </div>

      <div className="categories__list">
        {categoriesList.map((category) => {
          const isActive = category === selectedCategory;

          return (
            <button
              key={category}
              className={`categories__button ${
                isActive ? "categories__button--active" : ""
              }`}
              type="button"
              onClick={() => onSelectCategory(category)}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;