import { configureStore } from '@reduxjs/toolkit';
import { auth, layout, search, dashboard } from './slices';

export const store = configureStore({
    reducer: {
        auth,
        layout,
        search,
        dashboard,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {layout: LayoutState, users: UsersState, ...}
export type AppDispatch = typeof store.dispatch;
