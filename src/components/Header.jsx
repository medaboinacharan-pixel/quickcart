import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header({ cartItemCount, onCartClick, search, setSearch }) {
  return (
    <header className="header-container">
      {/* Logo */}
      <h1 className="header-title">
        <Link to="/" className="logo">QuickCart</Link>
      </h1>

      {/* Navigation */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/category/Electronics">Electronics</Link>
        <Link to="/category/Clothing">Clothing</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Cart Icon */}
      <div className="cart-icon" onClick={onCartClick}>
        🛒
        {cartItemCount > 0 && (
          <span className="cart-badge">{cartItemCount}</span>
        )}
      </div>
    </header>
  );
}

export default Header;