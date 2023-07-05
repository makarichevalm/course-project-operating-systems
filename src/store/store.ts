import { emptySplitApi } from '@api/api';
import testAtomReducer from '@components/HeaderComponent/reducers/componentReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        testAtomReducer,
        [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(emptySplitApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
