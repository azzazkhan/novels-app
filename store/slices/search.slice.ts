import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    opened: boolean;
    query: string;
}

const initialState: State = {
    opened: false,
    query: 'Lorem novel lroem ipsum ani ai ani',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setVisibility(state, action: PayloadAction<boolean | undefined>) {
            state.opened = typeof action.payload === 'boolean' ? action.payload : !state.opened;
        },
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        resetSearch(state) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            state = { ...initialState };
        },
    },
});

export const { setVisibility, setQuery, resetSearch } = searchSlice.actions;

export const search = searchSlice.reducer;
