import { initSplitApi } from './init'

export const contentAPI = initSplitApi.injectEndpoints({
    reducerPath: 'content',
    endpoints: (builder) => ({
        content: builder.query({
            query: (params) => {
                return {
                    url: ``,
                    method: 'GET',
                    service: 'content-service',
                    name: params.name
                }
            },
            providesTags: ['content']
        }),
        testimonials: builder.query({
            query: () => {
                return {
                    url: ``,
                    method: 'GET',
                    service: 'testimonials-service'
                }
            },
            providesTags: ['testimonials']
        }),
        environment: builder.query({
            query: () => {
                return {
                    url: ``,
                    method: 'GET',
                    service: 'environment-service'
                }
            },
            providesTags: ['environment']
        })
    }),
    overrideExisting: false
})

export const { 
    useContentQuery,
    useTestimonialsQuery,
    useEnvironmentQuery
} = contentAPI