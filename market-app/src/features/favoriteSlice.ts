import { createSlice } from '@reduxjs/toolkit'; 
import type { Product } from '../types/Product';

interface FavoriteState {
    favorites: Product[];
}

const initialState: FavoriteState = {
    favorites: [],
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;   