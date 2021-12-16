import { createSlice } from '@reduxjs/toolkit';
import * as cities from './cities'
import * as communities from './communities'
import * as subDivision from './subdivision'

export const LotSearchFields = createSlice({
    name: 'lot',
    initialState: {
        lmls: '',
        lkeyword: '',
        lcity: '',
        cityOptions: [
            "NAPLES",
            "BONITA SPRINGS",
            "ESTERO",
            "MARCO ISLAND",
            "CAPE CORAL",
            "LEHIGH ACRES",
            "FORT MYERS",
            ...cities.cities()
        ],
        lcommunity: '',
        communityOptions: [
            ...communities.Communities()
        ].sort(),
        lsubCondo: '',
        subCondoOptions: [
            ...subDivision.subDivisions()
        ].sort(),
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
                lkeyword:action.payload
            }
            
        },
        setMls: (state, action) => {
            return{
                ...state,
                lmls:action.payload
            }
        },
        setCity: (state, action) => {
            return{
                ...state,
                lcity:action.payload
            }
            
        },
        setCommunity: (state, action) => {
            return{
                ...state,
                lcommunity:action.payload
            }
            
        },
        setSubCondo: (state, action) => {
            return{
                ...state,
                lsubCondo:action.payload
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
    setMls,
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