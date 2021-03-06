import { initSplitApi } from './init'

export const mailAPI = initSplitApi.injectEndpoints({
    reducerPath: 'mail',
    endpoints: (builder) => ({
        contact: builder.mutation({
            query: (params) => {
                return {
                    url: `nsn/content/email`,
                    method: 'POST',
                    service: 'mail-service',
                    body: params
                }
            },
            providesTags: ['Mail']
        })
        
    }),
    overrideExisting: false
})

export const { 
    useContactMutation
} = mailAPI