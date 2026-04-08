import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/Homepage";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/Cartpage";
import CartSidebar from "./components/CartSidebar";

function App() {
  // ----- STATE -----
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState("");

  // ----- CART FUNCTIONS -----
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + change }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // ----- UI -----
  return (
    <BrowserRouter>
      <Header
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(!isCartOpen)}
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <HomePage
              onAddToCart={addToCart}
              search={search}
            />
          }
        />

        {/* Category */}
        <Route
          path="/category/:category"
          element={<CategoryPage onAddToCart={addToCart} />}
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              getTotalPrice={getTotalPrice}
            />
          }
        />
      </Routes>

      {/* Sidebar still works globally */}
      <CartSidebar
        isOpen={isCartOpen}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        getTotalPrice={getTotalPrice}
      />
    </BrowserRouter>
  );
}

export default App;