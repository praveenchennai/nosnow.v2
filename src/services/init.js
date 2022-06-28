import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from '../config.json';
const stage = 'prod';

const getBaseUrl=(service)=>{
    var module_url = Config.stage[stage];
    var MODULE_SERVICE = module_url.find(m=>m.service===service);
    var MODULE_SERVICE_URL = `https://${MODULE_SERVICE.apiId}.execute-api.${MODULE_SERVICE.region}.amazonaws.com/${stage}/`;
    return MODULE_SERVICE_URL;
}

const rawBaseQuery = fetchBaseQuery({
    baseUrl: '/'
});

const dynamicBaseQuery = async (args, api, extraOptions) =>{
    const adjustedUrl = getBaseUrl(args.service) + args.url;
    const adjustedArgs =  typeof args === 'string' ? adjustedUrl: { ...args, url: adjustedUrl }
    return rawBaseQuery(adjustedArgs, api, extraOptions);
}

// initialize an empty api service that we'll inject endpoints into later as needed
export const initSplitApi = createApi({
    baseQuery: dynamicBaseQuery,
    tagTypes: ['Mail'],
    endpoints: () => ({}),
})