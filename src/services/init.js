import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from '../config.json';
const stage = 'prod';

const getBaseUrl=(service)=>{
    var module_url = Config.stage[stage];
    if(service === 'tmp-service'){
        var MODULE_SERVICE_URL = `https://34.68.32.136/api/`;
        return MODULE_SERVICE_URL;
    }
    var MODULE_SERVICE = module_url.find(m=>m.service===service);
    var MODULE_SERVICE_URL = `https://${MODULE_SERVICE.apiId}.execute-api.${MODULE_SERVICE.region}.amazonaws.com/${stage}/`;
    return MODULE_SERVICE_URL;
}

const rawBaseQuery = fetchBaseQuery({
    baseUrl: '/'
});

const dynamicBaseQuery = async (args, api, extraOptions) =>{
    const adjustedUrl = getBaseUrl(args.service) + args.url;
    const adjustedArgs =  typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl };
    return rawBaseQuery(adjustedArgs, api, extraOptions)
    .then(res=>{
        return res;
    })
    .catch(error=>{
        console.log(error);
    })
    
}

// initialize an empty api service that we'll inject endpoints into later as needed
export const initSplitApi = createApi({
    baseQuery: dynamicBaseQuery,
    tagTypes: ['Mail', 'Share', 'tmp'],
    endpoints: () => ({}),
})