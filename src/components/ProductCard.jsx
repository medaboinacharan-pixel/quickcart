import React from "react";
import "./styles/ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="description">{product.description}</p>

      <p className="price">₹{product.price.toLocaleString()}</p>

      <span className="category">{product.category}</span>

      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;