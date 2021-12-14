import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as cities from './cities'
import * as communities from './communities'
import * as subDivision from './subdivision'
export const fetchCity = createAsyncThunk('res/fetchCity', (id) => {
    console.log("reached", id)
    return [];
})

const addCityOptions = (state, action) =>{
    var cityOptions = action.payload;
  return {
      ...state,
      cityOptions: cityOptions
    }
}

export const ResSearchFields = createSlice({
    name: 'res',
    initialState: {
        previousPages: [
            {page:0, start:0, index:0}
        ],
        page: 0,
        limit: 10,
        order: 'desc',
        sortBy: 'ModificationTimestamp',
        keyword: '',
        PropertyType: ['Residential', 'Residential Income', 'Commercial Sale'],
        city: '',
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
        community: '',
        communityOptions: [
            ...communities.Communities()
        ].sort(),
        subCondo: '',
        subCondoOptions: [
            ...subDivision.subDivisions()
        ].sort(),
        PropertySubType: [],
                
        PropertySubTypeOptions: [
            {id: 'Single Family Residence', value: 'Single Family'},
            {id: 'Low Rise (1-3)', value: 'Low Rise (1-3)'},
            {id: 'Mid Rise (4-7)', value: 'Mid Rise (4-7)'},
            {id: 'High Rise (8+)', value: 'High Rise (8+)'},
            {id: 'Apartment', value: 'Apartment'},
            {id: '2 Story', value: '2 Story'},
            {id: 'Townhouse', value: 'Town House'},
            {id: 'Multi Family', value: 'Multi Family'},
            {id: 'Duplex', value: 'Duplex'},
            {id: 'tx', value: 'Triplex'},
            {id: 'qx', value: 'Quadraplex'},
            {id: 'Manufactured Home', value: 'Manufactured'}
        ],
        CommunityFeatures: [],
        CommunityFeaturesExclude: [],
        CommunityFeaturesOptions: [
            {id: 'Gated', value: 'Gated'},
            {id: 'Non-Gated', value: 'Non-Gated'},
            {id: 'Golf', value: 'Golf'},
            {id: 'Golf Bundled', value: 'Golf Bundled'},
            {id: 'Golf Course', value: 'Golf Course'},
            {id: 'Golf Equity', value: 'Golf Equity'},
            {id: 'Golf Non Equity', value: 'Golf Non Equity'},
            {id: 'Golf Public', value: 'Golf Public'},
            {id: 'Clubhouse', value: 'Clubhouse'},
            {id: 'Dog Park', value: 'Dog Park'},
            {id: 'Fishing', value: 'Fishing'},
            {id: 'Fitness Center', value: 'Fitness Center'},
            {id: 'Lakefront Beach', value: 'Lakefront Beach'},
            {id: 'Park', value: 'Park'},
            {id: 'Pool', value: 'Pool'},
            {id: 'Tennis Court(s)', value: 'Tennis Court(s)'}
        ],
        AttachedGarageYN: 'Any',
        AttachedGarageYNOptions: [
            {id: 'Any', value: 'Any'},
            {id: 'Attached', value: 'Attached'},
            {id: 'Detached', value: 'Detached'}
        ],
        GarageSpaces: 'Any',
        GarageSpacesOptions: [
            {id: 0, value: 'Any'},
            {id: 1, value: '1+'},
            {id: 2, value: '2+'},
            {id: 3, value: '3+'},
            {id: 4, value: '4+'},
            {id: 5, value: '5+'},
            {id: 6, value: '6+'}
        ],
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
        monthlyPayment: {
            min: 0, max: 8
        },
        monthlyPaymentOptions: [
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
        beds: {
            min: 0, max: 5
        },
        baths: {
            min: 0, max: 5
        },
        recurringFee: {
            min: 0, max: 0
        },
        sqft: {
            min: 0, max: 0
        },
        yearBuilt: {
            min: 0, max: 0
        },
        WaterfrontFeatures: [],
        WaterfrontFeaturesOptions: [
            {id: 'Basin', value: 'Basin'},
            {id: 'Bay', value: 'Bay'},
            {id: 'Canal Front', value: 'Canal Front'},
            {id: 'Creek', value: 'Creek'},
            {id: 'Fresh Water', value: 'Fresh Water'},
            {id: 'Gulf Frontage', value: 'Gulf Frontage'},
            {id: 'Intersecting Canal', value: 'Intersecting Canal'},
            {id: 'Lagoon', value: 'Lagoon'},
            {id: 'Lake', value: 'Lake'},
            {id: 'Mangrove', value: 'Mangrove'},
            {id: 'Navigable', value: 'Navigable'},
            {id: 'No Gulf Access', value: 'No Gulf Access'},
            {id: 'On the Gulf Beach', value: 'On the Gulf Beach'},
            {id: 'Rip Rap', value: 'Rip Rap'},
            {id: 'River Front', value: 'River Front'},
            {id: 'Salt Water', value: 'Salt Water'},
            {id: 'Seawall', value: 'Seawall'},
            {id: 'None', value: 'None'},
        ],
        NABOR_PetsLimitMaxNumber: '',
        NABOR_PetsLimitMaxNumberOptions: [
            {id: 'Allowed', value: 'Allowed'},
            {id: 'Not Allowed', value: 'Not Allowed'}
        ],
        golfAccess: false,
        waterFrontView: false,
        guestHouse: false,
        newConstruction: false,
        dropDownAPI: 'https://nosnownaples.com/api/property/dropdown/res/City/'
    },
    reducers: {
        setPreviousPages: (state, action)=>{
            return{
                ...state,
                previousPages:[...state.previousPages, action.payload]
            }
        },
        resetPreviousPages: (state, action)=>{
            return {
                ...state,
                previousPages: [{page: 0, index: 0, start:0}]
            }
        },
        setPage: (state, action) =>{
            return{
                ...state,
                page:action.payload
            }
        },
        setLimit: (state, action) =>{
            return{
                ...state,
                limit:action.payload
            }
        },
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
        setPropertySubType: (state, action) => {
            return{
                ...state,
                PropertySubType:action.payload
            }
            
        },
        setCommunityFeatures: (state, action) => {
            // if(action.payload==='Non-Gated'){
            //     return{
            //         ...state,
            //         CommunityFeaturesExclude:action.payload
            //     }  
            // }
            return{
                ...state,
                CommunityFeatures:action.payload
            }
            
        },
        setAttachedGarageYN: (state, action) => {
            
            return{
                ...state,
                AttachedGarageYN:action.payload
            }
            
        },
        setGarageSpaces: (state, action) => {

            return{
                ...state,
                GarageSpaces:action.payload
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
        setMonthlyPayment: (state, action) => {

            return{
                ...state,
                monthlyPayment:{
                    ...state.monthlyPayment,
                    [action.payload.key]: action.payload.value
                }
            }
            
        },
        setBeds: (state, action) => {
            var params = {
                min: action.payload[0],
                max: action.payload[1]
            }
            return{
                ...state,
                beds:params
            }
            
        },
        setBaths: (state, action) => {
            var params = {
                min: action.payload[0],
                max: action.payload[1]
            }
            return{
                ...state,
                baths:params
            } 
        },
        setRecurringFee: (state, action) => {
            return{
                ...state,
                recurringFee:{
                    min: action.payload.min,
                    max: action.payload.max
                }
            }
            
        },
        setSqft: (state, action) => {
            return{
                ...state,
                sqft:{
                    min: action.payload.min,
                    max: action.payload.max
                }
            }
            
        },
        setYearBuilt: (state, action) => {
            return{
                ...state,
                yearBuilt:{
                    min: action.payload.min,
                    max: action.payload.max
                }
            }
            
        },
        setWaterfrontFeatures: (state, action) => {
            return{
                ...state,
                WaterfrontFeatures:action.payload
            }
            
        },        
        setNABOR_PetsLimitMaxNumber: (state, action) => {
            return{
                ...state,
                NABOR_PetsLimitMaxNumber:action.payload
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
            
        },       
        setGuestHouse: (state, action) => {
            return{
                ...state,
                guestHouse:action.payload
            }
            
        },        
        setNewConstruction: (state, action) => {
            return{
                ...state,
                newConstruction:action.payload
            }
            
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCity.fulfilled, addCityOptions);
        //builder.addCase(updateStop.fulfilled, updateItemsFromDB);
    },
})

export const { 
    setLimit,
    setPage,
    setPreviousPages,
    resetPreviousPages,
    setKeyword,
    setCity,
    setCommunity,
    setSubCondo,
    setPropertySubType,
    setCommunityFeatures,
    setAttachedGarageYN,
    setGarageSpaces,
    setPriceRange,
    setMonthlyPayment,
    setBeds,
    setBaths,
    setRecurringFee,
    setSqft,
    setYearBuilt,
    setWaterfrontFeatures,
    setNABOR_PetsLimitMaxNumber,
    setGolfAccess,
    setWaterFrontView,
    setGuestHouse,
    setNewConstruction
 } = ResSearchFields.actions

export default ResSearchFields.reducer
