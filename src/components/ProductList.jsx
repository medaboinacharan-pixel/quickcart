import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./styles/ProductList.css";

function ProductList({ onAddToCart }) {
  return (
    <div className="grid">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;