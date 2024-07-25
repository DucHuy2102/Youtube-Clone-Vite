import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slides/appSlide';

const store = configureStore({
    reducer: {
        app: appReducer,
    },
});

export default store;
