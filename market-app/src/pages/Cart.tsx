import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateQuantity, removeFromCart } from '../features/cartSlice';
import { addToFavorites } from '../features/favoriteSlice'; // Favori slice'ını içe aktar

function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const favoriteItems = useAppSelector((state) => state.favorites.favorites);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Modal Açma
  const handleRemoveClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Sadece Sepetten Çıkarma
  const confirmRemove = () => {
    if (selectedItem) {
      dispatch(removeFromCart(selectedItem.id));
      setIsModalOpen(false);
    }
  };

  // Sepetten Çıkar ve Favorilere Ekle
  const confirmRemoveAndFavorite = () => {
    if (selectedItem) {
      dispatch(addToFavorites(selectedItem)); // Önce favoriye ekle
      dispatch(removeFromCart(selectedItem.id)); // Sonra sepetten çıkar
      setIsModalOpen(false);
    }
  };

  const isAlreadyFavorite = selectedItem 
    ? favoriteItems.some((fav: any) => fav.id === selectedItem.id) 
    : false;

  return (
    <div className="cart-container">
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
                  onClick={() => handleRemoveClick(item)}
                  className="remove-main-btn"
                >
                  Kaldır
                </button>
              </div>
            </div>  
          ))
        )}
      </div>

      {/* SAĞ TARAF: SİPARİŞ ÖZETİ */}
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

      {/* MODAL YAPISI */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Ürünü sepetten kaldırmak istediğinize emin misiniz?</h3>
            <p><strong>{selectedItem?.title}</strong> sepetinizden çıkarılacak.</p>
            
            <div className="modal-actions">
              <button className="btn-remove-only" onClick={confirmRemove}>
                Ürünü sepetten çıkar
              </button>

              {!isAlreadyFavorite && (
                <button className="btn-remove-and-fav" onClick={confirmRemoveAndFavorite}>
                  Ürünü sepetten çıkar ve favorilere ekle
                </button>
              )}
              
              <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>
                Vazgeç
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;