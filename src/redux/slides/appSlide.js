import { createSlice } from '@reduxjs/toolkit';

export const appSlide = createSlice({
    name: 'app',
    initialState: {
        open: true,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.open = !state.open;
        },
    },
});

export const { toggleSidebar } = appSlide.actions;

export default appSlide.reducer;
