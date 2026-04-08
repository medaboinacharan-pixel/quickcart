function CartPage({ cart, onUpdateQuantity, onRemoveItem, getTotalPrice }) {
  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>

            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h3>Total: ₹{getTotalPrice()}</h3>
    </div>
  );
}

export default CartPage;