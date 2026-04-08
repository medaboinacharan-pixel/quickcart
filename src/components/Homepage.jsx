import React from "react";
import products from "../data/products";
import ProductList from "./ProductList";

function HomePage({ onAddToCart, search }) {
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ProductList
      products={filteredProducts}
      onAddToCart={onAddToCart}
    />
  );
}

export default HomePage;