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
      console.log(result.headers)
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
            
            if(!_arg){
              return {data: [], total: 0}
            }
            var resTotal = 0;
            const promises = _arg.url?.map(async arg=>{
              const randomResult = await baseQuery({
                url: `${arg.query}&${_arg.search}`,
                method: 'get'
              })
              if (randomResult.error) throw randomResult.error;
              resTotal = resTotal + randomResult.data.total;
              
              return {
                properties: randomResult.data.bundle,
                total: randomResult.data.total
              }
            });
            const results = await Promise.all(promises);
            var res = []
            var total = 0;
            var totalP = 0;
            results.map(r=>{
              res.push(...r.properties);
              total = total+r.total;
              totalP = totalP+r.properties.length;
            })
            return {data:{properties:res.reverse().slice(totalP-10).reverse(), total: total}}
          }
        })
    })
})

export const { 
    useMultipleCustomQuery
} = bridgeAPI