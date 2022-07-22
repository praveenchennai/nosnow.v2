import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {bridgeAPI} from 'services/bridge-api'
import auth from 'api/auth'
import res from 'api/res'
import lot from 'api/lot'
import communityGroup from 'api/community-group'
import communities from 'api/community'
import mapping from 'api/mapping'
import design from 'api/design'
import content from 'api/content'
import resresults from 'api/results'
import { mailAPI } from 'services/mail'
import { contentAPI } from 'services/content'
import { propertyApi } from 'services/property'

const store = configureStore({
    reducer: {
        [bridgeAPI.reducerPath]: bridgeAPI.reducer,
        [mailAPI.reducerPath]: mailAPI.reducer,
        [contentAPI.reducerPath]: contentAPI.reducer,
        [propertyApi.reducerPath]: propertyApi.reducer,
        auth: auth,
        res: res,
        communityGroup: communityGroup,
        resresults: resresults,
        lot: lot,
        communities: communities,
        mapping: mapping,
        content: content,
        design: design
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(bridgeAPI.middleware)
    .concat(contentAPI.middleware)
    .concat(propertyApi.middleware)
    .concat(mailAPI.middleware)
})

setupListeners(store.dispatch)

export default store;