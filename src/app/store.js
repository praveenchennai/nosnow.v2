import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {bridgeAPI} from 'services/bridge-api'
import auth from 'api/auth'
import res from 'api/res'
import lot from 'api/lot'
import communityGroup from 'api/community-group'
import communities from 'api/community'
import mapping from 'api/mapping'
import content from 'api/content'
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
        lot: lot,
        communities: communities,
        mapping: mapping,
        content: content
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bridgeAPI.middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mailAPI.middleware)
})

setupListeners(store.dispatch)

export default store;