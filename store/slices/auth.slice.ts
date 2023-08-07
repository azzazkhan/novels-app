import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Author, Profile, User } from 'types/resources';

interface State {
    status?: AsyncState;
    user?: User & { profile: Profile; author?: Author };
    refresh?: any;
}

const initialState: State = {};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus(state, action: PayloadAction<AsyncState>) {
            state.status = action.payload;
        },

        setUser(state, action: PayloadAction<State['user'] | undefined>) {
            state.user = action.payload;
        },

        setAuthRefresh(state, action: PayloadAction<any>) {
            state.refresh = action.payload || undefined;
        },

        resetAuth(state) {
            state.status = undefined;
            state.user = undefined;
            state.refresh = undefined;
        },
    },
});

export const { setAuthStatus, setUser, setAuthRefresh, resetAuth } = authSlice.actions;

export const auth = authSlice.reducer;
