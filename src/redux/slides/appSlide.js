import { createSlice } from '@reduxjs/toolkit';

export const appSlide = createSlice({
    name: 'app',
    initialState: {
        open: true,
        isOnWatchingVideo: false,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.open = !state.open;
        },
        toggleSidebarWatchVideo: (state) => {
            state.isOnWatchingVideo = !state.isOnWatchingVideo;
        },
    },
});

export const { toggleSidebar, toggleSidebarWatchVideo } = appSlide.actions;

export default appSlide.reducer;
