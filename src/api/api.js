import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '/' });
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = await baseQuery(
            '/refreshToken',
            api,
            extraOptions
        );
        if (refreshResult.data) {
            // store the new token
            // api.dispatch(tokenReceived(refreshResult.data));
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
        } else {
            // api.dispatch(loggedOut());
        }
    }
    return result;
};
// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});
