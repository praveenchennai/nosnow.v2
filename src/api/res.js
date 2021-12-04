import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
        page: 0,
        order: 'desc',
        sortBy: 'ModificationTimestamp',
        keyword: '',
        PropertyType: ['Residential', 'Residential Income', 'Commercial Sale'],
        city: '',
        cityOptions: [],
        community: '',
        subCondo: '',
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
            min: 0, max: 0
        },
        priceRangeOptions: [
            {id: 0, value: 'Any'},
            {id: 100000, value: '$100,000'},
            {id: 150000, value: '$150,000'},
            {id: 200000, value: '$200,000'},
            {id: 250000, value: '$250,000'},
            {id: 300000, value: '$300,000'},
            {id: 350000, value: '$350,000'},
            {id: 400000, value: '$400,000'},
            {id: 450000, value: '$450,000'},
            {id: 500000, value: '$500,000'},
            {id: 600000, value: '$600,000'},
            {id: 700000, value: '$700,000'},
            {id: 800000, value: '$800,000'},
            {id: 900000, value: '$900,000'},
            {id: 1000000, value: '$1,000,000'},
            {id: 1250000, value: '$1,250,000'},
            {id: 1500000, value: '$1,500,000'},
            {id: 1750000, value: '$1,750,000'},
            {id: 2000000, value: '$2,000,000'}
        ],
        monthlyPayment: {
            min: 0, max: 0
        },
        monthlyPaymentOptions: [
            {id: 0, value: 'Any'},
            {id: 1000, value: 'less $1000'},
            {id: 1250, value: '$1,250'},
            {id: 1500, value: '$1,500'},
            {id: 1750, value: '$1,750'},
            {id: 2000, value: '$2,000'},
            {id: 2500, value: '$2,500'},
            {id: 3000, value: '$3,000'},
            {id: 3500, value: '$3,500'}
        ],
        beds: {
            min: 0, max: 0
        },
        bbOptions:[
            {id: 1, value: '1'},
            {id: 2, value: '2'},
            {id: 3, value: '3'},
            {id: 4, value: '4'},
            {id: 5, value: '5'},
            {id: 0, value: 'Any'},
        ],
        baths: {
            min: 0, max: 0
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
        dropDownAPI: 'https://www.nosnownaples.com/api/property/dropdown/res/City/'
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
            
            return{
                ...state,
                priceRange:{
                    ...state.priceRange,
                    [action.payload.key]: action.payload.value
                }
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
            return{
                ...state,
                beds:{
                    ...state.beds,
                    [action.payload.key]: action.payload.value,
                }
            }
            
        },
        setBaths: (state, action) => {
            return{
                ...state,
                baths:{
                    ...state.baths,
                    [action.payload.key]: action.payload.value,
                }
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
