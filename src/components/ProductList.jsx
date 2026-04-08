import React from "react";
import ProductCard from "./ProductCard";
import "./styles/ProductList.css";

function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid">
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((item) => (
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

export default ProductList;