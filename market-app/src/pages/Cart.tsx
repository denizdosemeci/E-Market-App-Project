import React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateQuantity, removeFromCart } from '../features/cartSlice';

function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  return (
    <div className="cart-container">
      {/* SOL TARAF: ÜRÜNLER */}
      <div className="cart-items-list">
        <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>Sepetin ({cartItems.length})</h2>
        
        {cartItems.length === 0 ? (
          <p>Sepetiniz şu an boş.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p className="item-price-tag">${item.price}</p>
                </div>
              </div>

              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>+</button>
                </div>
                
                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{ color: '#ff4757', border: 'none', background: 'none', cursor: 'pointer', marginLeft: '10px' }}
                >
                  Kaldır
                </button>
              </div>
            </div>  
          ))
        )}
      </div>

      {/* SAĞ TARAF: ÖZET */}
      <aside className="cart-summary">
        <h3 className="summary-title">Sipariş Özeti</h3>
        <div className="summary-row">
          <span>Ara Toplam</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>Toplam</span>
          <span style={{ fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout-btn" disabled={cartItems.length === 0}>
          ÖDEMEYE GEÇ
        </button>
      </aside>
    </div>
  );
}

export default Cart;