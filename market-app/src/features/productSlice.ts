import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Product } from '../types/Product';
import { getProducts } from '../services/productService';

interface ProductsState {
  items: Product[]
}

const initialState: ProductsState = {
  items: [],
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return data.products; 
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: { 
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload
    })
  }
})

export default productsSlice.reducer


// Ne İş Yapar: Ürünlerle ilgili her şeyi (veriyi çekme, filtreleme, favoriye ekleme) burada tarif edersin.
// initialState: Odanın boş hali (başta liste boştur).
// extraReducers: Veri internetten geldiğinde listeyi doldurma talimatı.
// reducers: Arama yapınca listeyi daraltma talimatı.