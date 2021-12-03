import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {bridgeAPI} from 'services/bridge-api'
import auth from 'api/auth'
import res from 'api/res'
import lot from 'api/lot'
import communityGroup from 'api/community-group'
import resresults from 'api/results'

const store = configureStore({
    reducer: {
        [bridgeAPI.reducerPath]: bridgeAPI.reducer,
        auth: auth,
        res: res,
        communityGroup: communityGroup,
        resresults: resresults,
        lot: lot
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bridgeAPI.middleware)
})

setupListeners(store.dispatch)

export default store;