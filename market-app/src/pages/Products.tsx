import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/productSlice";

function Products() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="products-grid">
      {products.map((product) => (
        <article key={product.id} className="product-item">
          {/* Görsel Kutusu */}
          <div className="img-container">
            <img 
              src={product.thumbnail} 
              className="product-thumb" 
              alt={product.title} 
            />
          </div>
          
          {/* Ürün Bilgileri */}
          <div className="product-info">
            <h3 className="product-name">{product.title}</h3>
            <span className="product-price">${product.price}</span>
            <button className="btn-add">ADD TO CART</button>
          </div>
        </article>
        
      ))}
    </div>
  );
}

export default Products;