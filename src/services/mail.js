import { initSplitApi } from './init'

export const mailAPI = initSplitApi.injectEndpoints({
    reducerPath: 'mail',
    endpoints: (builder) => ({
        contact: builder.mutation({
            query: (params) => {
                return {
                    url: `nsn/user/inquire`,
                    method: 'POST',
                    service: 'mail-service',
                    body: params
                }
            },
            providesTags: ['Mail']
        }),
        share: builder.mutation({
            query: (params) => {
                return {
                    url: `nsn/user/share`,
                    method: 'POST',
                    service: 'mail-service',
                    body: params
                }
            },
            providesTags: ['Share']
        }),
        
    }),
    overrideExisting: false
})

export const { 
    useContactMutation,
    useShareMutation
} = mailAPI