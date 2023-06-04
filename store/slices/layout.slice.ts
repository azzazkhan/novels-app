import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    navbarOpened: boolean;
    darkMode: boolean;
}

const initialState: State = {
    navbarOpened: false,
    darkMode: false,
};

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        toggleNavbar(state, action: PayloadAction<boolean | undefined>) {
            state.navbarOpened =
                typeof action.payload === 'boolean' ? action.payload : !state.navbarOpened;
        },
        toggleDarkMode(state, action: PayloadAction<boolean | undefined>) {
            state.darkMode = typeof action.payload === 'boolean' ? action.payload : !state.darkMode;
        },
        resetLayout(state) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            state = { ...initialState };
        },
    },
});

export const { toggleNavbar, toggleDarkMode, resetLayout } = layoutSlice.actions;

export const layout = layoutSlice.reducer;
