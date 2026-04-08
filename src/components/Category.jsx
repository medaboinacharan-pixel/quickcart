import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";

function CategoryPage({ onAddToCart }) {
  const { category } = useParams();

  const filtered = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="grid">
      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        filtered.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  );
}

export default CategoryPage;