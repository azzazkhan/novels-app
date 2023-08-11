import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    navOpened: boolean;
}

const initialState: State = {
    navOpened: false,
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        toggleDashboardSidebar(state, action: PayloadAction<boolean | undefined>) {
            state.navOpened =
                typeof action.payload === 'boolean' ? action.payload : !state.navOpened;
        },
        reset(state) {
            state.navOpened = initialState.navOpened;
        },
    },
});

export const { toggleDashboardSidebar, reset } = dashboardSlice.actions;

export const dashboard = dashboardSlice.reducer;
