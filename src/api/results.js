import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios';
import {getAttachedGarageYN, getGarageSpaces, getPriceRangeMin, getPriceRangeMax, 
    getBedroomsTotalMin, getBedroomsTotalMax,
    getBathroomsTotalDecimalMin, getBathroomsTotalDecimalMax, getLivingAreaMin, getLivingAreaMax,
    getYearBuiltMin, getYearBuiltMax, getWaterfrontFeatures
} from './filters'

const getParams = (getState) =>{
    var state = getState();
    var url = state.auth.apiUrl;
    var {page, sortBy, order, PropertyType, PropertySubType, AttachedGarageYN, GarageSpaces,
    priceRange, beds, baths, sqft, yearBuilt, WaterfrontFeatures
    } = state.res;
    console.log("order", order)
    url = `${url}offset=${page}&sortBy=${sortBy}&order=${order}&PropertyType.in=${PropertyType}&PropertySubType.in=${PropertySubType}`;
    url = getAttachedGarageYN(AttachedGarageYN, url);
    url = getGarageSpaces(GarageSpaces, url);
    url = getPriceRangeMin(priceRange.min, url);
    url = getPriceRangeMax(priceRange.max, url);
    url = getBedroomsTotalMin(beds.min, url);
    url = getBedroomsTotalMax(beds.max, url);
    url = getBathroomsTotalDecimalMin(baths.min, url);
    url = getBathroomsTotalDecimalMax(baths.max, url);
    url = getLivingAreaMin(sqft.min, url);
    url = getLivingAreaMax(sqft.max, url);
    url = getYearBuiltMin(yearBuilt.min, url);
    url = getYearBuiltMax(yearBuilt.max, url);
    url = getWaterfrontFeatures(WaterfrontFeatures, url);
    console.log(url)
    return url;
}

/***************************
 * Fetch Res Results - Start
 */

export const fetchListings = createAsyncThunk('resr/fetchListings', async (params, { getState, requestId }) => {
    var url = getParams(getState, {});
    return axios.get(url)
    .then(result=>{
        return result.data;
    })
    .catch(err=>{
        throw err;
    })
})

const fetchListingsP = (state, action) =>{
    
} 

const fetchListingsR = (state, action) =>{
    
} 

const fetchListingsF = (state, action) =>{
    return {
        ...state,
        bundle: action.payload.bundle,
        total: action.payload.total
    }
} 


/***************************
 * Fetch Res Results - End
 */

export const ResResults = createSlice({
    name: 'resr',
    initialState: {
        total: '',
        keyword: '',
        bundle: [],
        fields: {},
        error: {
            name: '',
            message: ''
        }
    },
    reducers: {
        setKeyword: (state, action) => {
            return{
                ...state,
                keyword:action.payload
            }
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchListings.pending, fetchListingsP);
        builder.addCase(fetchListings.rejected, fetchListingsR);
        builder.addCase(fetchListings.fulfilled, fetchListingsF);
    },
})

export const { 
    setKeyword
 } = ResResults.actions

export default ResResults.reducer