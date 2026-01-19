import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Character } from '@/types';
import { RootState } from '@/store/store'; 

const API_URL = 'http://localhost:3001/favorites';

interface FavoritesState {
  items: Character[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: FavoritesState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async () => {
    const response = await fetch(API_URL);
    return (await response.json()) as Character[];
  }
);

export const addFavoriteAsync = createAsyncThunk<
  Character, 
  Character, 
  { state: RootState; rejectValue: string }
>(
  'favorites/addFavorite',
  async (character, { getState, rejectWithValue }) => {
    const state = getState();
    const favorites = state.favorites.items;

    const exists = favorites.some((item) => item.id === character.id);
    if (exists) {
      return rejectWithValue('El personaje ya está en favoritos');
    }

    if (favorites.length >= 4) {
      return rejectWithValue('¡Ups! Solo puedes tener 4 favoritos máximo.');
    }

    try {
      const charForDB = { 
        ...character, 
        id: character.id.toString() 
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(charForDB),
      });
      
      if (!response.ok) {
        alert('Ocurrió un error al guardar')
        throw new Error('Error al guardar');
      }
      alert('Se agregó a favoritos')
      
      return character; 
    } catch (error) {
      return rejectWithValue('Error de conexión con el servidor');
    }
  }
);

export const removeFavoriteAsync = createAsyncThunk(
  'favorites/removeFavorite',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { 
        method: 'DELETE' 
      });
      
      if (!response.ok) {
        alert('Ocurrió un error al eliminar')
        throw new Error(`Error del servidor: ${response.statusText}`);
      }
      alert('Se eliminó de favoritos')
      return id;
    } catch (error) {
      console.error("❌ Falló el borrado:", error);
      return rejectWithValue('Error al eliminar');
    }
  }
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addFavoriteAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addFavoriteAsync.rejected, (state, action) => {
        state.error = action.payload as string;
        console.warn(action.payload); 
        alert('Tus favoritos están llenos')
      })
      .addCase(removeFavoriteAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default favoritesSlice.reducer;