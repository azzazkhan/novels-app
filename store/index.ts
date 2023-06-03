import { configureStore } from '@reduxjs/toolkit';
import { layout } from './slices';

export const store = configureStore({
    reducer: {
        layout,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {layout: LayoutState, users: UsersState, ...}
export type AppDispatch = typeof store.dispatch;
