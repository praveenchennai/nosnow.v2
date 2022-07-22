import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from '../config.json';
const stage = 'prod';

const getBaseUrl=(service)=>{
    var module_url = Config.stage[stage];
    if(service==='bridgeApi-service'){
        var baseURL = `${Config.api.apiUrl}${Config.dataSet[stage]}/`;
        return baseURL
    } else {
        
        var MODULE_SERVICE = module_url.find(m=>m.service===service);
        var MODULE_SERVICE_URL = `https://${MODULE_SERVICE.apiId}.execute-api.${MODULE_SERVICE.region}.amazonaws.com/${stage}/`;
        return MODULE_SERVICE_URL;
    }
}

const getContent = (name) =>{
    var middleContent = Config.middleContent[name];
    return {data: middleContent};
}

const getTestimonials = () =>{
    var testimonials = Config.testimonials;
    return {data: testimonials};
}

const getEnvironment = () =>{
    var environment = Config.environment;
    return {data: environment};
}

const rawBaseQuery = fetchBaseQuery({
    baseUrl: '/'
});

const dynamicBaseQuery = async (args, api, extraOptions) =>{
    switch(args.service){
        case 'content-service':
            return getContent(args.name);
        case 'testimonials-service':
            return getTestimonials();   
        case 'environment-service':
            return getEnvironment();   
        case 'bridgeApi-service':
            const url = `${getBaseUrl(args.service)}${args.resource}?access_token=${Config.api.browserToken}&${args.url}`;
            console.log(url);
            const modifiedArgs =  typeof args === 'string' ? url : { ...args, url: url }
            return rawBaseQuery(modifiedArgs, api, extraOptions);    
        default:
            const adjustedUrl = getBaseUrl(args.service) + args.url;
            const adjustedArgs =  typeof args === 'string' ? adjustedUrl: { ...args, url: adjustedUrl }
            return rawBaseQuery(adjustedArgs, api, extraOptions);
    }
}

// initialize an empty api service that we'll inject endpoints into later as needed
export const initSplitApi = createApi({
    baseQuery: dynamicBaseQuery,
    tagTypes: ['Mail', 'testimonials', 'content', 'environment', 'Rooms'],
    endpoints: () => ({}),
})