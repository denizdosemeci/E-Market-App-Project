import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks'; 
import { useNavigate } from 'react-router-dom';
import { removeFromFavorites } from '../features/favoriteSlice';
import { addToCart } from '../features/cartSlice';

const Favorites: React.FC = () => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites.favorites);
    const navigate = useNavigate();
    
  return (
    <div className="favorites-container">
      {/* Üst Başlık Alanı */}
      <div className="favorites-header">
        <h2>
          Favorilerim <span className="fav-count-badge">{favorites.length} Ürün</span>
        </h2>
      </div>

      {/* Eğer favori yoksa bu kısım görünecek (Tasarım testi için açık bırakıyorum) */}
      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <div style={{ fontSize: '50px' }}>💔</div>
          <h3>Henüz hiçbir ürünü beğenmediniz.</h3>
          <p>Alışverişe dönüp sevdiğiniz ürünleri kalplemeye ne dersiniz?</p>
          <button className="btn-add" style={{ width: '200px', margin: '20px auto' }} onClick={() => navigate("/")}>
            ALIŞVERİŞE BAŞLA
          </button>
        </div>
      ) : (
        /* Favori Ürünlerin Listelendiği Grid */
        <div className="products-grid">
          {favorites.map((product) => (
            <article key={product.id} className="product-item">
              <div className="img-container">
                <button className="like-btn active">❤️</button>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.title}</h3>
                <p className="product-price">${product.price}</p>
                <button className="btn-add" onClick={() => dispatch(addToCart(product))}>SEPETE EKLE</button>
                <button className="remove-fav-btn" onClick={() => dispatch(removeFromFavorites(product))}>Listeden Kaldır</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;