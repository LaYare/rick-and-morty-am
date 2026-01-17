import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    // Aquí agregarías más reducers si tu app crece
  },
});

// Tipos inferidos para TypeScript (¡Vitales!)
// Esto permite que VS Code sepa qué estructura tiene tu estado.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;