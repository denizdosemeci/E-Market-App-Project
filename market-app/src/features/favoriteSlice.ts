import { createSlice } from '@reduxjs/toolkit'; 
import type { Product } from '../types/Product';

interface FavoriteState {
    favorites: Product[];
}

const loadFavorites = (): Product[] => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

const initialState: FavoriteState = {
  favorites: loadFavorites(),
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: { payload: Product }) => {
            state.favorites.push(action.payload);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        removeFromFavorites: (state, action: { payload: Product }) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;   