import { createSlice } from '@reduxjs/toolkit';
import type { CartItem, Product } from '../types/Product';

interface cartItem extends Product {
    quantity: number;
}

interface CartState {
    items: cartItem[];
}

const loadCart = (): CartItem[] => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

const initialState: CartState = {
  items: loadCart(),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        updateQuantity: (state, action) => {
            const { id, amount } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity += amount;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(i => i.id !== id);
                }
                localStorage.setItem("cart", JSON.stringify(state.items));
            } 
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;