import { initSplitApi } from './init'

export const communityContentApi = initSplitApi.injectEndpoints({
    reducerPath: 'community',
    endpoints: (builder) => ({
        communityContent: builder.query({
            query: (params) => {
                return {
                    url: `content/paragraphs/c/${params.id}`,
                    method: 'GET',
                    service: 'tmp-service'
                }
            },
            providesTags: ['tmp']
        })
    }),
    overrideExisting: false
})

export const { 
    useCommunityContentQuery
} = communityContentApi