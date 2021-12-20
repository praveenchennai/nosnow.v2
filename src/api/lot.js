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
            min: 0, max: 26
        },
        priceRangeOptions: [
            {value: 0, label: 'Any', v: 0},
            {value: 1, label: '$150,000', v: 150000},
            {value: 2, label: '$200,000', v: 200000},
            {value: 3, label: '$250,000', v: 250000},
            {value: 4, label: '$300,000', v: 300000},
            {value: 5, label: '$350,000', v: 350000},
            {value: 6, label: '$400,000', v: 400000},
            {value: 7, label: '$450,000', v: 450000},
            {value: 8, label: '$500,000', v: 500000},
            {value: 9, label: '$600,000', v: 600000},
            {value: 10, label: '$700,000', v: 700000},
            {value: 11, label: '$800,000', v: 800000},
            {value: 12, label: '$900,000', v: 900000},
            {value: 13, label: '$1,000,000', v: 1000000},
            {value: 14, label: '$1,250,000', v: 1250000},
            {value: 15, label: '$1,500,000', v: 1500000},
            {value: 16, label: '$1,750,000', v: 1750000},
            {value: 17, label: '$2,000,000', v: 2000000},
            {value: 18, label: '$2,250,000', v: 2250000},
            {value: 19, label: '$2,500,000', v: 2500000},
            {value: 20, label: '$3,000,000', v: 3000000},
            {value: 21, label: '$4,000,000', v: 4000000},
            {value: 22, label: '$5,000,000', v: 5000000},
            {value: 23, label: '$7,500,000', v: 7500000},
            {value: 24, label: '$10,000,000', v: 10000000},
            {value: 25, label: '$20,000,000', v: 20000000},
            {value: 26, label: '$30,000,000', v: 30000000}
        ],
        LotSizeSquareFeet: {
            min: 0, max: 15
        },
        LotSizeSquareFeetOptions: [
            {value: 0, label: 'Any', v: 0},
            {value: 1, label: '1,000 Sqft', v: 1000},
            {value: 2, label: '2,000 Sqft', v: 2000},
            {value: 3, label: '3,000 Sqft', v: 3000},
            {value: 4, label: '4,000 Sqft', v: 4000},
            {value: 5, label: '5,000 Sqft', v: 5000},
            {value: 6, label: '7,500 Sqft', v: 7500},
            {value: 7, label: '1/4 Acre', v: 10890},
            {value: 8, label: '1/2 Acre', v: 21780},
            {value: 9, label: '1 Acre', v: 43560},
            {value: 10, label: '2 Acres', v: 87120},
            {value: 11, label: '5 Acres', v: 217800},
            {value: 12, label: '10 Acres', v: 435600},
            {value: 13, label: '20 Acres', v: 871200},
            {value: 14, label: '50 Acres', v: 2178000},
            {value: 15, label: '100 Acres', v: 4356000},
        ],
        totalFee: {
            min: 0, max: 8
        },
        totalFeeOptions: [
            {value: 0, label: 'Any', v: 0},
            {value: 1, label: '$1000', v: 1000},
            {value: 2, label: '$1,250', v: 1250},
            {value: 3, label: '$1,500', v: 1500},
            {value: 4, label: '$1,750', v: 1750},
            {value: 5, label: '$2,000', v: 2000},
            {value: 6, label: '$2,500', v: 2500},
            {value: 7, label: '$3,000', v: 3000},
            {value: 8, label: '$3,500', v: 3500}
        ],
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
            var params = {
                min: action.payload[0],
                max: action.payload[1]
            }
            return{
                ...state,
                priceRange  :params
            }
            
        },
        setLotSize: (state, action) => {
            var params = {
                min: action.payload[0],
                max: action.payload[1]
            }
            return{
                ...state,
                LotSizeSquareFeet: params
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
    setLotSize,
    setTotalFee,
    setWaterFront,
    setLotType,
    setGolfAccess,
    setWaterFrontView
 } = LotSearchFields.actions

export default LotSearchFields.reducer