import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {bridgeAPI} from 'services/bridge-api'
import auth from 'api/auth'
import res from 'api/res'
import lot from 'api/lot'
import communityGroup from 'api/community-group'
import resresults from 'api/results'
import { mailAPI } from 'services/mail'

const store = configureStore({
    reducer: {
        [bridgeAPI.reducerPath]: bridgeAPI.reducer,
        [mailAPI.reducerPath]: mailAPI.reducer,
        auth: auth,
        res: res,
        communityGroup: communityGroup,
        resresults: resresults,
        lot: lot
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bridgeAPI.middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mailAPI.middleware)
})

setupListeners(store.dispatch)

export default store;