import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const LotSearchFields = createSlice({
    name: 'lot',
    initialState: {
        keyword: '',
        city: '',
        community: '',
        subCondo: '',
        priceRange: {
            min: 0, max: 0
        },
        acres: {
            min: 0, max: 0
        },
        totalFee: {
            min: 0, max: 0
        },
        waterFront: '',
        lotType: '',
        golfAccess: false, 
        waterFrontView: false
    },
    reducers: {
        setKeyword: (state, action) => {
            return{
                ...state,
                keyword:action.payload
            }
            
        },
        setCity: (state, action) => {
            return{
                ...state,
                city:action.payload
            }
            
        },
        setCommunity: (state, action) => {
            return{
                ...state,
                community:action.payload
            }
            
        },
        setSubCondo: (state, action) => {
            return{
                ...state,
                subCondo:action.payload
            }
            
        },
        setPriceRange: (state, action) => {
            return{
                ...state,
                priceRange:{
                    min: action.payload.min,
                    max: action.payload.max
                }
            }
            
        },
        setAcers: (state, action) => {
            return{
                ...state,
                acres:{
                    min: action.payload.min,
                    max: action.payload.max 
                }
            }
            
        },
        setTotalFee: (state, action) => {
            return{
                ...state,
                totalFee:{
                    min: action.payload.min,
                    max: action.payload.max
                }
            }
            
        },
        setWaterFront: (state, action) => {
            return{
                ...state,
                waterFront:action.payload
            }
            
        },        
        setLotType: (state, action) => {
            return{
                ...state,
                lotType:action.payload
            }
            
        },        
        setGolfAccess: (state, action) => {
            return{
                ...state,
                golfAccess:action.payload
            }
            
        },        
        setWaterFrontView: (state, action) => {
            return{
                ...state,
                waterFrontView:action.payload
            }
            
        }
    },
})

export const { 
    setKeyword,
    setCity,
    setCommunity,
    setSubCondo,
    setPriceRange,
    setTotalFee,
    setWaterFront,
    setLotType,
    setGolfAccess,
    setWaterFrontView
 } = LotSearchFields.actions

export default LotSearchFields.reducer