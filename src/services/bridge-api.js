import { createApi  } from '@reduxjs/toolkit/query/react';
import Config from '../config.json';
import axios from 'axios'

const env = "prod";

const getBaseUrl=()=>{
  var dataSet = Config.dataSet[env];
  var api = Config.api.apiUrl;
  var browserToken = Config.api.browserToken;
  var response = `${api}${dataSet}/listings?access_token=${browserToken}`;
  return response;
}

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    
    try {
      const result = await axios({ url: baseUrl + url, method, data })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }

export const bridgeAPI = createApi({
    reducerPath: 'bridgeAPI',
    baseQuery: axiosBaseQuery({
        baseUrl: getBaseUrl()
    }),
    tagTypes: ['res', 'lot'],
    endpoints: (builder) => ({
        multipleCustom: builder.query({
          async queryFn(_arg, _queryApi, _extraOptions, baseQuery) {
            //Exit if no arg array.
            if(!_arg){
              return {data:{
                properties:[], 
                total: 0,
                id: 1
              }}
            }

            //Assign Index, arg, 
            var index = _arg.index;
            var arg = _arg.url[index];
            var res = [];
            var limit = _arg.limit;
            var start = _arg.start;

            while(index<_arg.url.length){
              var randomResult = await baseQuery({
                url: `${arg.query}&${_arg.search}&offset=${start}`,
                method: 'get'
              })
              if (randomResult.error) throw randomResult.error;
              var start = 1
              randomResult.data.bundle.map(r=>{
                if(res.length<limit){
                  res.push(r);
                  start++
                } 
              })
              if(res.length===limit){
                return {data:{
                  properties:res, 
                  index: arg.id,
                  start: start
                }}
              }
              index++;
              arg = _arg.url[index];
              if(!arg){
                index--;
              }
            }
          }
        })
    })
})

export const { 
    useMultipleCustomQuery
} = bridgeAPI