function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <span>{product.category}</span>
    </div>
  );
}

export default ProductCard;