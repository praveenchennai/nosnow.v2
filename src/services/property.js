import { initSplitApi } from './init'

export const propertyApi = initSplitApi.injectEndpoints({
    reducerPath: 'property',
    endpoints: (builder) => ({
        getRooms: builder.query({
            query: (params) => {
                return {
                    url: `ListingKey=${params.id}&limit=100`,
                    method: 'GET',
                    service: 'bridgeApi-service',
                    resource: 'rooms'
                    
                }
            },
            providesTags: ['Rooms']
        })
    }),
    overrideExisting: false
})

export const { 
    useGetRoomsQuery
} = propertyApi