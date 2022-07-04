import { createApi  } from '@reduxjs/toolkit/query/react';
import Config from '../config.json';
import axios from 'axios'

const env = "prod";

const getBaseUrl=()=>{
  var dataSet = Config.dataSet[env];
  var api = Config.api.apiUrl;
  var response = `${api}${dataSet}/listings`;
  return response;
}

const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    try {
      var browserToken = `access_token=${Config.api.browserToken}`;
      switch(data){
        case 'property':

          var reqUrl = `${baseUrl}/${url}?${browserToken}`
          console.log(reqUrl)
        break;
        case 'search': 
          var reqUrl = `${baseUrl}?${browserToken}${url}`
        break;
      }
      const result = await axios({ url: reqUrl, method, data })
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
    getProperty: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, baseQuery) {
        //Exit if no arg array.
        if(!_arg){
          return {}
        }
        var response = await baseQuery({
          url: `${_arg}`,
          method: 'get',
          data: 'property'
        })
        return response
      }
    }),
    multipleCustom: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, baseQuery) {
        console.log(_arg)
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
            url: `${arg.query}&${_arg.search}&offset=0`,
            method: 'get',
            data: 'search'
          })
          if (randomResult.error) throw randomResult.error;
          var start = 1
          randomResult.data.bundle.map(r=>{
            if(res.length<limit){
              if(res.find(k=>k.ListingKey===r.ListingKey)){

              } else {
                res.push(r);
              }
              
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
          
          var temp = arg
          arg = _arg.url[index];
          if(!arg){
            return {
              data:{
                properties:res, 
                index: temp.id,
                start: start
              }
            }
          }
        }
      }
    })
  })
})

export const { 
    useMultipleCustomQuery,
    useGetPropertyQuery
} = bridgeAPI