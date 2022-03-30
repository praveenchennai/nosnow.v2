import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as cities from './cities'
import * as communities from './communities'
import * as subDivision from './subdivision'
export const fetchCity = createAsyncThunk('res/fetchCity', (id) => {
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
        mls: '',
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
            {id: 'Single Family', value: 'Single Family'},
            {id: 'Low Rise (1-3)', value: 'Low Rise (1-3)'},
            {id: 'Mid Rise (4-7)', value: 'Mid Rise (4-7)'},
            {id: 'High Rise (8+)', value: 'High Rise (8+)'},
            {id: 'Apartment', value: 'Apartment'},
            {id: '2 Story', value: '2 Story'},
            {id: 'Townhouse', value: 'Town House'},
            {id: 'Multi Family', value: 'Multi Family'},
            {id: 'Duplex', value: 'Duplex'},
            {id: 'Triplex', value: 'Triplex'},
            {id: 'Quadraplex', value: 'Quadraplex'},
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
        GarageSpaces: 0,
        GarageSpacesOptions: [
            {value: 0, label: 'Any', v: 0},
            {value: 1, label: '1+', v: 1},
            {value: 2, label: '2+', v: 2},
            {value: 3, label: '3+', v: 3},
            {value: 4, label: '4+', v: 4},
            {value: 5, label: '5+', v: 5},
            {value: 6, label: '6+', v: 6}
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
        fee: {
            min: 0, max: 12
        },
        feeOptions: [
            {value: 0, label: 'Any', v: 0},
            {value: 1, label: 'No Fee', v: 0},
            {value: 2, label: '$50', v: 50},
            {value: 3, label: '$100', v: 100},
            {value: 4, label: '$200', v: 200},
            {value: 5, label: '$300', v: 300},
            {value: 6, label: '$400', v: 400},
            {value: 7, label: '$500', v: 500},
            {value: 8, label: '$600', v: 600},
            {value: 9, label: '$700', v: 700},
            {value: 10, label: '$800', v: 800},
            {value: 11, label: '$900', v: 900},
            {value: 12, label: '$1000', v: 1000}
        ],
        sqft: {
            min: 0, max: 15
        },
        sqftOptions: [
            {value: 0, label: 'Any', v: 0},
            {value: 1, label: '500', v: 500},
            {value: 2, label: '750', v: 750},
            {value: 3, label: '1000', v: 1000},
            {value: 4, label: '1250', v: 1250},
            {value: 5, label: '1500', v: 1500},
            {value: 6, label: '1750', v: 1750},
            {value: 7, label: '2000', v: 2000},
            {value: 8, label: '2250', v: 2250},
            {value: 9, label: '2500', v: 2500},
            {value: 10, label: '2750', v: 2750},
            {value: 11, label: '3000', v: 3000},
            {value: 12, label: '3500', v: 3500},
            {value: 13, label: '4000', v: 4000},
            {value: 14, label: '5000', v: 5000},
            {value: 15, label: '7500', v: 7500}
        ],
        yearBuilt: {
            min: 0, max: 23
        },
        yearBuiltOptions: [
            {value: 0, label: '1960', v: 1960},
            {value: 1, label: '1960', v: 1965},
            {value: 2, label: '1965', v: 1970},
            {value: 3, label: '1970', v: 1975},
            {value: 4, label: '1975', v: 1980},
            {value: 5, label: '1980', v: 1985},
            {value: 6, label: '1985', v: 1990},
            {value: 7, label: '1990', v: 1995},
            {value: 8, label: '1995', v: 2000},
            {value: 9, label: '2000', v: 2005},
            {value: 10, label: '2010', v: 2010},
            {value: 11, label: '2011', v: 2011},
            {value: 12, label: '2012', v: 2012},
            {value: 13, label: '2013', v: 2013},
            {value: 14, label: '2014', v: 2014},
            {value: 15, label: '2015', v: 2015},
            {value: 16, label: '2016', v: 2016},
            {value: 17, label: '2017', v: 2017},
            {value: 18, label: '2018', v: 2018},
            {value: 19, label: '2019', v: 2019},
            {value: 20, label: '2020', v: 2020},
            {value: 21, label: '2021', v: 2021},
            {value: 22, label: '2022', v: 2022},
            {value: 23, label: '2023', v: 2023}
        ],
        WaterfrontFeatures: [],
        WaterfrontFeaturesOptions: [
            "BAY",
            "LAKE",
            "BASIN",
            "CANAL FRONT",
            "CREEK",
            "FRESH WATER",
            "GULF FRONTAGE",
            "INTERSECTING CANEL",
            "LAGOON",
            "MANGROVE",
            "NAVIGABLE",
            "NO GULF Access",
            "ON THE GULF BEACH",
            "RIP RAP",
            "RIVER FRONT",
            "SALT WATER",
            "SEAWALL",
            "NONE"
        ],
        Amenities: [],
        AmenitiesOptions: [
            "None",
            "Sauna",
            "Cabana",
            "Marina",
            "Library",
            "Theater",
            "Dog Park",
            "Shopping",
            "Sidewalk",
            "Billiard Room",
            "Clubhouse",
            "Horses OK",
            "Play Area",
            "Basketball Court",
            "Guest Room",
            "Hobby Room",
            "Pickleball",
            "Restaurant",
            "Volleyball",
            "Bocce Court",
            "Golf Course",
            "Streetlight",
            "Trash Chute",
            "Barbecue",
            "Beach Access",
            "Beauty Salon",
            "Bike Storage",
            "Boat Storage",
            "Fishing Pier",
            "Racquetball",
            "Shuffleboard Court",
            "Tennis Court(s)",
            "Water Skiing",
            "Fitness Center",
            "Storage",
            "Putting Green",
            "Common Laundry",
            "Park",
            "Pool",
            "Community Room",
            "Stable(s)",
            "Beach - Private",
            "Business Center",
            "Internet Access",
            "Lakefront Beach",
            "Full Service Spa",
            "Bike And Jog Path",
            "Car Wash Area",
            "Concierge",
            "Private Membership",
            "Beach Club Included",
            "Community Boat Dock",
            "Community Boat Lift",
            "Community Boat Ramp",
            "Community Boat Slip",
            "Underground Utility",
            "Beach Club Available",
            "Spa/Hot Tub",
            "Fish Cleaning Station",
            "Private Beach Pavilion",
            "Fitness Center",
            "Assisted Living Available",
            "Electric Vehicle Charging",
            "Community Gulf Boat Access"
        ].sort(),

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
        setMls: (state, action) => {
            return{
                ...state,
                mls:action.payload
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
            var params = {
                min: action.payload[0],
                max: action.payload[1]
            }
            return{
                ...state,
                monthlyPayment:params
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
        setFee: (state, action) => {
            var params = {
                min: action.payload[0],
                max: action.payload[1]
            }
            return{
                ...state,
                fee:params
            } 
        },
        setSqft: (state, action) => {
            var params = {
                min: action.payload[0],
                max: action.payload[1]
            }
            return{
                ...state,
                sqft:params
            } 
        },
        setYearBuilt: (state, action) => {
            var params = {
                min: action.payload[0],
                max: action.payload[1]
            }
            return{
                ...state,
                yearBuilt:params
            } 
        },
        setWaterfrontFeatures: (state, action) => {
            return{
                ...state,
                WaterfrontFeatures:action.payload
            }
            
        },   
        setAmenitiesFeatures: (state, action) => {
            return{
                ...state,
                Amenities:action.payload
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
    setMls,
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
    setFee,
    setSqft,
    setYearBuilt,
    setWaterfrontFeatures,
    setAmenitiesFeatures,
    setNABOR_PetsLimitMaxNumber,
    setGolfAccess,
    setWaterFrontView,
    setGuestHouse,
    setNewConstruction
 } = ResSearchFields.actions

export default ResSearchFields.reducer
