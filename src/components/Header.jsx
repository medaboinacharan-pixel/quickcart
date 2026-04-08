import React from "react";
import "./styles/Header.css";

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header-container">
      <h1 className="header-title">QuickCart</h1>

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