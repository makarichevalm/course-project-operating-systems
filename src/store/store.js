import { emptySplitApi } from '@api/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(emptySplitApi.middleware),
});
