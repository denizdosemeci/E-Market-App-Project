import React from 'react';

function Cart() {
  return (
    <div className="cart-container">
      {/* SOL TARAF: ÜRÜNLER */}
      <div className="cart-items-list">
        <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>Your Cart (1)</h2>
        
        <div className="cart-item">
          <img src="https://via.placeholder.com/100" alt="Product" className="cart-item-img" />
          <div className="cart-item-info">
            <h3 className="cart-item-title">Premium Wireless Headphones</h3>
            <span className="cart-item-price">$199.00</span>
          </div>
          <div className="quantity-controls">
            <button className="qty-btn">-</button>
            <span>1</span>
            <button className="qty-btn">+</button>
          </div>
          <button style={{ color: '#ff4757', border: 'none', background: 'none', cursor: 'pointer', marginLeft: '10px' }}>
            Remove
          </button>
        </div>
      </div>

      {/* SAĞ TARAF: ÖZET */}
      <aside className="cart-summary">
        <h3 className="summary-title">Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>$199.00</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>$199.00</span>
        </div>
        <button className="checkout-btn">PROCEED TO CHECKOUT</button>
      </aside>
    </div>
  );
}

export default Cart;